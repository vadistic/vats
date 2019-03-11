import { getIn, recursiveTransform, removeElOnIndex } from '@vats/utils'
import { cloneDeep } from 'apollo-utilities'
import { applyChange, Diff } from 'deep-diff'

/**
 * report multiple deep updates as one first-level prop update
 */
export const squashRelationChanges = (source: any) => (
  acc: Array<Diff<any, any>>,
  change: Diff<any, any>,
  i: number,
  arr: Array<Diff<any, any>>,
) => {
  const path = change.path

  // find, remove it form acc, and return previous update
  // (to squash multiple deep changes into one)
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
      // report deep one-to-one edits as object edit
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

      // report deep one-to-many edits as array edits
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
      // copy edit/delete
      acc.push(change)
    }
  } else {
    // copy rest
    acc.push(change)
  }

  return acc
}

/**
 * deep-diff applyChange leave sparse arrays
 * so it's necessary to fill blanks with elemenets from prev
 */
export const fillEmptyArrayElements = <T extends object | any[]>(target: T, source: T): T =>
  recursiveTransform(target, [], (value, path) => {
    if (Array.isArray(value)) {
      const result = []

      // ! Array.map/ forEach/ for in loops skip empty elements :/
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

/**
 * Transforms query data to mutation data value
 * just `{set:[...content]}` for all arrays
 */

export const transformScalarsQueryDataToUpdateData = <T extends any>(target: T) =>
  recursiveTransform(target, [], value => {
    if (Array.isArray(value)) {
      return { set: value }
    }

    return value
  })

/**
 * Previous apply relations diff fn returns connect/disconnect data
 * for reordered array elements- mostly because it's not easy
 * to check if there would be more changes with the same node
 * while processing each chnage separatly
 *
 * Prisma api does not allow reordering nodes deleting and then creating them
 * and throws an error on same id for multiple operations
 *
 * This funtion removes actions that operate on non-unique ids
 * (this probably can be done way less costly in apply/squash
 * but it gets really complicated considering the need
 * to preserve diffs apply order etc.)
 *
 * Also, maybe there would be use case when this daata will prove useful
 */

// actions that require payload data to have unique id
const uniqueIdActions = ['connect', 'disconnect', 'delete']

export const transformRelationsUpdateData = <T extends any>(target: T) =>
  recursiveTransform(target, [], (value, path) => {
    if (path.length === 1) {
      const isOneToMany = Object.values(value).every(action => Array.isArray(action))

      if (isOneToMany) {
        // create a set of unique ids for all actions
        const uniqueIds = Object.values(value)
          .flat(1)
          .map(data => data.id)
          .filter(
            (id, index, arr) => ![...arr.slice(0, index), ...arr.slice(index + 1)].includes(id),
          )

        const result: any = {}

        // copy data for unique id actions
        uniqueIdActions.forEach(action => {
          if (action in value) {
            const uniqueData = value[action].filter((data: any) => uniqueIds.includes(data.id))
            if (uniqueData.length > 0) {
              result[action] = uniqueData
            }
          }
        })

        // clear return undefined on empty object
        return Object.keys(result).length > 0 ? result : undefined
      }
    }

    // just to delete properites with no value
    // can do it here, becuase recursiveTransform fn is depth first
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
