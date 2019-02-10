import { diff, Diff } from 'deep-diff'
import {
  getIn,
  insertElOnIndex,
  mutableSetValueIn,
  removeElOnIndex,
  updateElOnIndex,
} from '../../utils'

export const buildAutoUpdateMutationData = <Value>(prev: Value, next: Value) => {
  const updateDiffs = diff<Value, Value>(prev, next, (path, key) => {
    return ['id', 'createdAt', 'updatedAt', 'deletedAt'].includes(key)
  })

  if (!updateDiffs) {
    return undefined
  }

  const result = {}

  const litPropUpdates: Array<Diff<Value, Value>> = []
  const litArrPropUpdates: Array<Diff<Value, Value>> = []

  updateDiffs.forEach(change => {
    if (change.path) {
      // own literal prop update
      const isLitPropUpdate = change.path.length === 1 && typeof change.path[0] === 'string'
      // own array of literals prop update
      const isLitArrPropUpdate = change.path.length === 2 && typeof change.path[1] === 'number'

      if (isLitPropUpdate) {
        litPropUpdates.push(change)
      } else if (isLitArrPropUpdate) {
        litArrPropUpdates.push(change)
      } else {
        console.error('CHANGE:', change)
        throw Error(
          `Invalid AutoUpdate payload. Relations updates are not handled by auto diff (yet)`,
        )
      }
    }
  })

  litPropUpdates.forEach(mutableHandleLitPropUpdate(result))
  litArrPropUpdates.forEach(mutableHandleLitArrPropUpdate(result, prev))

  return result
}

const mutableHandleLitPropUpdate = (result: any) => (
  change: Diff<any, any>,
  i: number,
  diffs: Array<Diff<any, any>>,
) => {
  const path = change.path
  if (path) {
    if (change.kind === 'N') {
      mutableSetValueIn(result, change.rhs, path)
    }
    if (change.kind === 'E') {
      mutableSetValueIn(result, change.rhs, path)
    }
    if (change.kind === 'D') {
      mutableSetValueIn(result, null, path)
    }
  }
}

const mutableHandleLitArrPropUpdate = (result: any, prev: any) => (
  change: Diff<any, any>,
  i: number,
  diffs: Array<Diff<any, any>>,
) => {
  const elPath = change.path
  const getArrPath = (path: any[]) => path.slice(0, -1) as Array<string | number>
  const getElIndex = (path: any[]) => (path.slice(-1) as unknown) as number

  if (elPath) {
    const arrPath = getArrPath(elPath)
    const elIndex = getElIndex(elPath)

    // checks if any changes were already applied on this array
    // join('/') is just simple path serialisation
    const isFirstUpdateOnArr = diffs.some(
      (_change, _i) =>
        !!_change.path && getArrPath(_change.path).join('/') === arrPath.join('/') && _i < i,
    )

    // copy prev array values as {set: []} on first run
    if (!isFirstUpdateOnArr) {
      mutableSetValueIn(result, { set: getIn(prev, ...arrPath) }, arrPath)
    }

    // apply changes
    const prevSetArr = getIn(result, ...arrPath, 'set')

    if (change.kind === 'N') {
      mutableSetValueIn(result, insertElOnIndex(prevSetArr, elIndex, change.rhs), [
        ...arrPath,
        'set',
      ])
    }
    if (change.kind === 'E') {
      mutableSetValueIn(result, updateElOnIndex(prevSetArr, elIndex, change.rhs), [
        ...arrPath,
        'set',
      ])
    }
    if (change.kind === 'D') {
      mutableSetValueIn(result, removeElOnIndex(prevSetArr, elIndex), [...arrPath, 'set'])
    }
  }
}
