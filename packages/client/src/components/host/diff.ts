import { applyChange, diff, Diff } from 'deep-diff'
import { getIn, mutableSetValueIn, recursiveTransform, tryGetIn } from '../../utils'

const isScalarValue = (value: any) =>
  typeof value === 'string' ||
  typeof value === 'number' ||
  typeof value === 'boolean' ||
  value === null

const isNonNested = (path: any[]) => typeof path[0] === 'string' && path.length === 1

const isNonNestedElement = (path: any[]) =>
  path.length === 2 && typeof path[0] === 'string' && typeof path[1] === 'number'

/*
 * It's not spaghetti code - it's a decision tree^^
 *
 * switch change
 * | N (single arr el added) => rhs isScalar && isNonNestedElement
 * | D (single arr el removed) => lhs isScalar && isNonNestedElement
 * | E (property edited) => lhs & rhs isScalar && isNonNested
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
      console.log('It happens', change)
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
      console.log('It happens', change)
      return isScalarValue(change.lhs) && isNonNestedElement(path)
    }

    // changes in array of scalars
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

const applyScalarChange = (target: any, source: any, change: Diff<any, any>) => {
  const path = change.path

  if (path) {
    const dir = path.slice(0, -1)
    const el = path.slice(-1)[0]

    // handle change of single array element
    // without checking for other edits on this array
    // they would be reported as 'A' change
    if (typeof el === 'number') {
      mutableSetValueIn(target, getIn(source, ...dir), dir)
    }

    // handle multiple array elements changes
    if (change.kind === 'A') {
      // copy whole array on the first touch
      const isTouched = !!tryGetIn(target, ...path)
      if (!isTouched) {
        mutableSetValueIn(target, getIn(source, ...path), path)
      }

      applyChange(target, undefined, { ...change.item, path: [...path, change.index] })
    }

    // handle rest
    applyChange(target, undefined, change)
  }
}

/*
 * [WIP]
 * relationships cases:
 * | N & non-nested => NEVER (this would mean query was missing field)
 * | D & non-nested => NEVER (this would means whole prop was deleted, maybe allow?)
 * | E & non-nested =>
 *    | lhs null & rhs all props scalars or array of scalars => create/ connect
 *    | lhs any & rhs null => delete/ disconnect
 *    | (lhs & rhs) => replace
 * | A on non-nested path =>
 *    | N & create/connect
 *    | D & delete/disconnect
 *    | E =>
 *        | lhs & rhs are scalar => update
 *        | lhs & rhs are not scalar => fail/ recursive?
 *  nested are tricky...
 */

export interface IRelationsMap {
  [index: string]: {
    onCreate?: 'create' | 'connect'
    onDelete?: 'delete' | 'disconnect'
    onUpdate?: 'update'
  }
}

const isValidRelationChange = (change: Diff<any, any>, map?: IRelationsMap) => {
  const path = change.path

  if (path && map) {
    // Handle One-To-One create/delete
    if (change.kind === 'E' && isNonNested(path)) {
      // it's create/connect
      if (!change.lhs) {
        return !!tryGetIn(map, ...path, 'onCreate')
      }
      // it's delete/disconnect
      if (!change.rhs) {
        return !!tryGetIn(map, ...path, 'onDelete')
      }
    }

    // Handle One-To-Many create/delete
    if (change.kind === 'A' && isNonNested(path)) {
      // it's create/connect
      if (change.item.kind === 'N') {
        return !!tryGetIn(map, ...path, 'onCreate')
      }
      // it's delete/disconnect
      if (change.item.kind === 'D') {
        return !!tryGetIn(map, ...path, 'onDelete')
      }
    }
  }

  return false
}

const applyRelationChange = (
  target: any,
  source: any,
  change: Diff<any, any>,
  map?: IRelationsMap,
) => {
  const path = change.path

  if (path && map) {
    applyChange(target, undefined, change)
  }
}

export const diffAutoUpdataData = <Value>(prev: Value, next: Value, map?: IRelationsMap) => {
  const updateDiffs = diff<Value, Value>(prev, next, (path, key) => {
    return ['__typename', 'id', 'createdAt', 'updatedAt', 'deletedAt'].includes(key)
  })

  if (!updateDiffs) {
    return { queryData: undefined, updateData: undefined, relationsData: undefined }
  }

  const scalarData: Partial<Value> = {}
  const relationsData: Partial<Value> = {}

  // reverse for correct array diffs update
  updateDiffs.reverse().forEach(change => {
    const path = change.path

    if (path) {
      if (isValidScalarChange(change)) {
        applyScalarChange(scalarData, prev, change)
      } else if (isValidRelationChange(change, map)) {
        // applyRelationChange(relationsData, prev, change, map)
      } else {
        console.log('skipping change', change)
      }
    }
  })

  const updateData = recursiveTransform(scalarData, [], (value, path) => {
    // just set {} all arrays
    if (Array.isArray(value)) {
      return { set: value }
    }

    return value
  })

  const undefOnEmpty = (input: object) => (Object.keys(input).length === 0 ? undefined : input)

  return {
    queryData: undefOnEmpty(scalarData),
    relationsData: undefOnEmpty(relationsData),
    updateData: undefOnEmpty(updateData),
  }
}
