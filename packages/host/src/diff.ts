import { getIn, recursiveTransform, removeElOnIndex, setValueIn, tryGetIn } from '@vats/utils'
import cloneDeep from 'clone-deep'
import { applyChange, diff, Diff } from 'deep-diff'

const isScalarValue = (value: any) =>
  typeof value === 'string' ||
  typeof value === 'number' ||
  typeof value === 'boolean' ||
  value === null

const isNonNested = (path: any[]) => typeof path[0] === 'string' && path.length === 1

const isNonNestedElement = (path: any[]) =>
  path.length === 2 && typeof path[0] === 'string' && typeof path[1] === 'number'

export interface RelationsMap {
  onCreate: 'create' | 'connect'
  onDelete: 'delete' | 'disconnect'
}

export interface Relations {
  [index: string]: RelationsMap
}

export type RelationsType<T> = { [K in keyof T]?: RelationsMap }

interface DiffResult<Value> {
  queryData: Partial<Value> | undefined
  updateData: any
}

/*
 * It's not spaghetti code - it's a decision tree^^
 *
 * switch change
 * | N (single arr el added) => rhs isScalar && isNonNestedElement
 * | E (property edited) => lhs & rhs isScalar && isNonNested
 * | D (single arr el removed) => lhs isScalar && isNonNestedElement
 * | A (multi arr edits) => isNonNested
 *    | N => rhs isScalar
 *    | E => lsh & rhs isScalar
 *    | D => lhs isScalar
 *    | A => NEVER
 */
const isValidScalarChange = (change: Diff<any, any>) => {
  const path = change.path

  if (path) {
    if (change.kind === 'N') {
      return isScalarValue(change.rhs) && isNonNestedElement(path)
    }

    if (change.kind === 'E') {
      return (
        isScalarValue(change.lhs) &&
        isScalarValue(change.rhs) &&
        (isNonNested(path) || isNonNestedElement(path))
      )
    }

    if (change.kind === 'D') {
      return isScalarValue(change.lhs) && isNonNestedElement(path)
    }

    if (change.kind === 'A' && isNonNested(path)) {
      if (change.item.kind === 'N') {
        return isScalarValue(change.item.rhs)
      }
      if (change.item.kind === 'E') {
        return isScalarValue(change.item.lhs) && isScalarValue(change.item.rhs)
      }
      if (change.item.kind === 'D') {
        return isScalarValue(change.item.lhs)
      }

      // changes in arrays of arrays
      return false
    }
  }

  return false
}

const applyScalarChange = (targetQueryData: any, change: Diff<any, any>) => {
  const path = change.path
  const queryData = targetQueryData

  if (path) {
    // handle array elements create/delete
    if (change.kind === 'A') {
      applyChange(queryData, undefined, { ...change.item, path: [...path, change.index] })
    } else {
      // handle rest
      applyChange(queryData, undefined, change)
    }
  }

  return { queryData }
}

/*
 * supported relationships cases:
 * | N & non-nested => NEVER (this would mean query was missing field)
 * | D & non-nested => NEVER (this would means whole prop disappeared)
 * | E & non-nested(path) => ONE-TO-ONE conenction
 *    | lhs === null & rhs !== null => create
 *    | lhs !== null & rhs === null => delete
 *    | lhs !== null & rhs !== null => replace (create + delete)
 * | E & non-nested-element(path) => ONE-TO-MANY relation replace
 *    | lhs !== null & rhs !== null => replace (disconnect + connect)
 * | A on non-nested path => ONE-TO-MANY relation create/delete
 *    | N & create/connect
 *    | D & delete/disconnect
 *
 *  updates and nested relations are tricky and not supported yet...
 */

const isValidRelationChange = (change: Diff<any, any>, map?: RelationsType<any>) => {
  const path = change.path

  if (path && map) {
    // Handle One-To-One
    if (change.kind === 'E' && isNonNested(path)) {
      // it's create
      if (!change.lhs && change.rhs) {
        return !!tryGetIn(map, ...path, 'onCreate')
      }

      // it's delete
      if (change.lhs && !change.rhs) {
        return !!tryGetIn(map, ...path, 'onDelete')
      }

      if (change.lhs && change.rhs) {
        return !!tryGetIn(map, ...path, 'onCreate') && !!tryGetIn(map, ...path, 'onDelete')
      }
    }

    // Handle One-To-Many create/delete
    if (change.kind === 'A' && isNonNested(path)) {
      // it's create
      if (change.item.kind === 'N') {
        return !!tryGetIn(map, ...path, 'onCreate')
      }

      // it's delete
      if (change.item.kind === 'D') {
        return !!tryGetIn(map, ...path, 'onDelete')
      }

      // it's replace
      if (change.item.kind === 'E') {
        return !!tryGetIn(map, ...path, 'onCreate') && !!tryGetIn(map, ...path, 'onDelete')
      }
    }
  }

  return false
}

const applyRelationChange = (
  targetQueryData: any,
  targetUpdateData: any,
  change: Diff<any, any>,
  map?: RelationsType<any>,
) => {
  const path = change.path
  const queryData = targetQueryData
  let updateData = targetUpdateData

  const handleOneToMany = (
    action: 'create' | 'delete' | 'connect' | 'disconnect',
    arrPath: Array<string | number>,
    value: any,
  ) => {
    const prevActionsOfType = tryGetIn(updateData, ...arrPath, action) || []

    let payload

    if (action === 'create') {
      payload = payload
    }

    if ((action === 'connect' || action === 'disconnect' || action === 'delete') && 'id' in value) {
      payload = {
        id: value.id,
      }
    }

    if (!payload) {
      console.error('Diff: cannot resolve relation (except create) without id', change)
    }

    if (!tryGetIn(updateData, ...arrPath)) {
      updateData = setValueIn(updateData, {}, arrPath)
    }

    updateData = setValueIn(updateData, payload, [...arrPath, action, prevActionsOfType.length])
  }

  const handleOneToOne = (
    action: 'create' | 'delete' | 'connect' | 'disconnect',
    propPath: any[],
    value: any,
  ) => {
    let payload

    if (action === 'create') {
      payload = payload
    }

    if ((action === 'connect' || action === 'disconnect' || action === 'delete') && 'id' in value) {
      payload = {
        id: value.id,
      }
    }

    if (!payload) {
      console.error('Diff: cannot resolve relation (except create) without id', change)
    }

    if (!tryGetIn(updateData, ...propPath)) {
      updateData = setValueIn(updateData, {}, propPath)
    }

    updateData = setValueIn(updateData, payload, [...propPath, action])
  }

  if (path && map) {
    const actionsMap = tryGetIn(map, ...path)
    if (actionsMap) {
      // OneToMany - handle array elements add/delete
      if (change.kind === 'A') {
        // it's create
        if (change.item.kind === 'N' && actionsMap.onCreate) {
          handleOneToMany(actionsMap.onCreate, path, change.item.rhs)
        }

        // it's delete
        if (change.item.kind === 'D' && actionsMap.onDelete) {
          handleOneToMany(actionsMap.onDelete, path, change.item.lhs)
        }

        // it's replace or sort
        if (change.item.kind === 'E' && actionsMap.onCreate && actionsMap.onDelete) {
          handleOneToMany(actionsMap.onDelete, path, change.item.lhs)
          handleOneToMany(actionsMap.onCreate, path, change.item.rhs)
        }

        applyChange(queryData, undefined, { ...change.item, path: [...path, change.index] })
      } else {
        if (change.kind === 'E' && isNonNested(path)) {
          // it's create
          if (change.lhs === null && change.rhs !== null) {
            handleOneToOne(actionsMap.onCreate, path, change.rhs)
          }

          // it's delete
          if (change.lhs !== null && change.rhs === null) {
            handleOneToOne(actionsMap.onDelete, path, change.lhs)
          }

          // it's replace
          if (change.lhs !== null && change.rhs !== null) {
            handleOneToOne(actionsMap.onDelete, path, change.lhs)
            handleOneToOne(actionsMap.onCreate, path, change.rhs)
          }
        } else {
          console.log('TODO:', change)
        }

        applyChange(queryData, undefined, change)
      }
    }
  }

  return {
    queryData,
    updateData,
  }
}

// report deep changes as prop change
const squashRelationChanges = (source: any) => (
  acc: Array<Diff<any, any>>,
  change: Diff<any, any>,
  i: number,
  arr: Array<Diff<any, any>>,
) => {
  const path = change.path

  // stack multiple deep changes into one
  const getPrev = () => {
    if (i > 0 && path) {
      const lastChangeIndex = acc.findIndex(_change => {
        const _path = _change.path
        if (!_path) {
          return false
        }

        if (_change.kind === 'A') {
          return [..._path, _change.index].join('.') === path.slice(0, 2).join('.')
        } else {
          return _path.join('.') === path.slice(0, 1).join('.')
        }
      })

      if (lastChangeIndex >= 0) {
        const lastChange = acc[lastChangeIndex]

        if (lastChange.kind === 'E') {
          acc = removeElOnIndex(acc, lastChangeIndex)
          return lastChange.rhs
        }

        if (lastChange.kind === 'A' && lastChange.item.kind === 'E') {
          acc = removeElOnIndex(acc, lastChangeIndex)
          return lastChange.item.rhs
        }
      }
    }
  }

  const isOneToOne = path && path.length >= 2 && typeof path[1] === 'string'
  const isOneToMany = path && path.length >= 3 && typeof path[1] === 'number'

  if (path && (isOneToOne || isOneToMany)) {
    if (change.kind === 'E') {
      // report deep oneToOne edits as object edit
      if (typeof path[1] === 'string') {
        const propPath = path.slice(0, 1)
        const lhs = getIn(source, ...propPath)
        const rhs = getPrev() || cloneDeep(lhs)

        applyChange(rhs, undefined, {
          ...change,
          path: path.slice(1),
        })

        acc.push({
          kind: 'E',
          path: propPath,
          lhs,
          rhs,
        })
      }

      // report deep oneToMany edits as array edits
      if (typeof path[1] === 'number') {
        const arrPath = [path[0]]
        const index = path[1]
        const lhs = getIn(source, ...arrPath, index)
        const rhs = getPrev() || cloneDeep(lhs)
        applyChange(rhs, undefined, {
          ...change,
          path: path.slice(2),
        })
        acc.push({
          kind: 'A',
          path: arrPath,
          index,
          item: {
            kind: 'E',
            lhs,
            rhs,
            path: [...arrPath, index],
          },
        })
      }
    } else {
      acc.push(change)
    }
  } else {
    acc.push(change)
  }

  return acc
}

// because deep-diff applyChange leave arrays with empty elements
const fillEmptyArrayElements = <T extends object | any[]>(target: T, source: T): T =>
  recursiveTransform(target, [], (value, path) => {
    if (Array.isArray(value)) {
      const result = []

      // ! Array.map loop skips empty elements :/
      // aparently it's called "elision"
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        const el = value[i]
        if (el !== undefined) {
          result.push(el)
        } else {
          result.push(getIn(source, ...path, i))
        }
      }

      return result
    }

    return value
  })

const transformScalarsQueryDataToUpdateData = <T extends any>(target: T) =>
  recursiveTransform(target, [], value => {
    // just set: {[...content]} for all arrays
    if (Array.isArray(value)) {
      return { set: value }
    }

    return value
  })

// filter for those unique actions
// probably can be done way less costly in apply/squash
// but it's get really complicated considering the need to preserve diffs apply order etc.

// actions that require payload data to have unique id
const uniqueActions = ['connect', 'disconnect', 'delete']

const transformRelationsUpdateData = <T extends any>(target: T) =>
  recursiveTransform(target, [], (value, path) => {
    if (path.length === 1) {
      const isOneToMany = Object.values(value).every(action => Array.isArray(action))

      if (isOneToMany) {
        const uniqueIds = Object.values(value)
          .flat(1)
          .map(data => data.id)
          .filter(
            (id, index, arr) => ![...arr.slice(0, index), ...arr.slice(index + 1)].includes(id),
          )

        const result: any = {}

        uniqueActions.forEach(action => {
          if (action in value) {
            const uniqueData = value[action].filter((data: any) => uniqueIds.includes(data.id))
            if (uniqueData.length > 0) {
              result[action] = uniqueData
            }
          }
        })

        // clear prop val when no unique actions
        return Object.keys(result).length > 0 ? result : undefined
      }
    }

    // just clear undefined properties
    // can do it here, becuase recursivetransform is depth first
    if (path.length === 0) {
      const init: any = {}
      return Object.entries(value).reduce((acc, [key, val]) => {
        if (val) {
          acc[key] = val
        }
        return acc
      }, init)
    }

    return value
  })

export const diffQuery = <Value>(prev: Value, next: Value, map?: RelationsType<any>) => {
  const scalars: DiffResult<Value> = {
    queryData: undefined,
    updateData: undefined,
  }
  const relations: DiffResult<Value> = {
    queryData: undefined,
    updateData: undefined,
  }

  const systemFieldsKeys = ['createdAt', 'updatedAt', 'deletedAt']

  const updateDiffs = diff<Value, Value>(
    prev,
    next,
    (path, key) => systemFieldsKeys.includes(key) || path.length >= 4,
  )

  if (!updateDiffs) {
    return { scalars, relations, queryData: undefined, updateData: undefined }
  }

  // creating temp pointers because those mutable apply actions are pretty effective in loop
  let _scalarsQueryData = Array.isArray(prev) ? [] : {}
  let _scalarsUpdateData = {}
  let _relationsQueryData = Array.isArray(prev) ? [] : {}
  let _relationsUpdateData = {}

  // reverse for correct array diffs update
  updateDiffs
    .reverse()
    .reduce(squashRelationChanges(prev), [])
    .forEach(change => {
      const path = change.path
      if (path) {
        if (isValidScalarChange(change)) {
          const result = applyScalarChange(_scalarsQueryData, change)
          _scalarsQueryData = result.queryData
        } else if (isValidRelationChange(change, map)) {
          const result = applyRelationChange(_relationsQueryData, _relationsUpdateData, change, map)
          _relationsQueryData = result.queryData
          _relationsUpdateData = result.updateData
        } else {
          console.warn('Diff: skipping invalid change', change)
        }
      }
    })

  _scalarsQueryData = fillEmptyArrayElements(_scalarsQueryData, prev)
  _scalarsUpdateData = transformScalarsQueryDataToUpdateData(_scalarsQueryData)

  _relationsQueryData = fillEmptyArrayElements(_relationsQueryData, prev)
  _relationsUpdateData = transformRelationsUpdateData(_relationsUpdateData)

  const isNotEmpty = <T extends object | any[]>(input: T) =>
    (Array.isArray(input) ? input.length : Object.keys(input).length) > 0

  if (isNotEmpty(_scalarsQueryData)) {
    scalars.queryData = _scalarsQueryData
  }
  if (isNotEmpty(_scalarsUpdateData)) {
    scalars.updateData = _scalarsUpdateData
  }
  if (isNotEmpty(_relationsQueryData)) {
    relations.queryData = _relationsQueryData
  }
  if (isNotEmpty(_relationsUpdateData)) {
    relations.updateData = _relationsUpdateData
  }

  return {
    scalars,
    relations,
    // because query data can be array or object
    queryData: Array.isArray(prev)
      ? [
          ...[scalars.queryData ? scalars.queryData : []],
          ...[relations.queryData ? relations.queryData : []],
        ]
      : { ...scalars.queryData, ...relations.queryData },
    updateData: { ...scalars.updateData, ...relations.updateData },
  }
}
