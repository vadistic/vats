import { setValueIn, tryGetIn } from '@vats/utils'
import { applyChange, Diff } from 'deep-diff'
import { isNonNested, UpdateDiffOptions } from './update'

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
 *  relation updates and nested relations are tricky and not supported yet...
 */

export const isValidRelationChange = (change: Diff<any, any>, options: UpdateDiffOptions) => {
  const path = change.path

  if (path && options.map) {
    // handle one-to-one
    if (change.kind === 'E' && isNonNested(path)) {
      // it's create
      if (!change.lhs && change.rhs) {
        return !!tryGetIn(options.map, ...path, 'onCreate')
      }

      // it's delete
      if (change.lhs && !change.rhs) {
        return !!tryGetIn(options.map, ...path, 'onDelete')
      }

      // it's replace
      if (change.lhs && change.rhs) {
        return (
          !!tryGetIn(options.map, ...path, 'onCreate') &&
          !!tryGetIn(options.map, ...path, 'onDelete')
        )
      }
    }

    // handle one-to-many
    // ! only create/delete for now
    if (change.kind === 'A' && isNonNested(path)) {
      // it's create
      if (change.item.kind === 'N') {
        return !!tryGetIn(options.map, ...path, 'onCreate')
      }

      // it's delete
      if (change.item.kind === 'D') {
        return !!tryGetIn(options.map, ...path, 'onDelete')
      }

      // it's replace
      if (change.item.kind === 'E') {
        return (
          !!tryGetIn(options.map, ...path, 'onCreate') &&
          !!tryGetIn(options.map, ...path, 'onDelete')
        )
      }
    }
  }

  return false
}

export const applyRelationChange = (
  targetQueryData: any,
  targetUpdateData: any,
  change: Diff<any, any>,
  options: UpdateDiffOptions,
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

  if (path && options.map) {
    const actionsMap = tryGetIn(options.map, ...path)
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
