import { StringMap } from '@vats/utils'
import { autoUpdate, AutoUpdateHandler } from './auto'
import { getNestedRelations, getRelation, withoutId } from './utils'

export const handleOneToOne: AutoUpdateHandler = ({
  prevProp,
  prevPropRaw,
  nextProp,
  nextPropRaw,
  map,
  key,
  prefilter,
  rootPath,
  flatUpdate,
}) => {
  /*
   * ONE TO ONE CREATE/CONNECT
   */

  // comparing raws to corectly detect mutation type on possibly prefiltered data
  if (!prevPropRaw && nextPropRaw) {
    const relation = getRelation(map, key, 'onCreate')
    if (relation === 'connect') {
      return {
        propQueryData: nextPropRaw,
        propUpdateData: { connect: { id: nextProp.id } },
      }
    }

    if (relation === 'create') {
      // some recursion
      const data = autoUpdate(
        {},
        withoutId(nextProp),
        { prefilter, map: getNestedRelations(map, key) },
        [...rootPath, key],
      )

      return {
        propQueryData: nextPropRaw,
        propUpdateData: { create: data.updateData },
      }
    }

    // no relation
    return
  }

  /*
   * ONE TO ONE UPDATE/REPLACE
   */
  if (prevPropRaw && nextPropRaw) {
    // update

    if (!flatUpdate && prevProp.id === nextProp.id) {
      // flat flag seems necessary for recursive use
      const flat = getRelation(map, key, 'onUpdate') === 'flat'

      const data = autoUpdate(
        prevProp,
        nextProp,
        { prefilter, map: getNestedRelations(map, key) },
        [...rootPath, key],
        flat,
      )

      return {
        propQueryData: nextPropRaw,
        propUpdateData: { update: data.updateData },
      }
    }

    // replace
    if (prevProp.id !== nextProp.id) {
      const createRelation = getRelation(map, key, 'onCreate')
      const deleteRelation = getRelation(map, key, 'onDelete')

      if (!createRelation || !deleteRelation) {
        return
      }

      const propUpdateData: StringMap<any> = {}

      if (deleteRelation === 'delete' || deleteRelation === 'disconnect') {
        propUpdateData[deleteRelation] = { id: prevProp.id }
      }

      if (createRelation === 'connect') {
        propUpdateData.connect = { id: nextProp.id }
      }

      if (createRelation === 'create') {
        const data = autoUpdate({}, withoutId(nextProp), { prefilter }, [...rootPath, key])

        propUpdateData.create = data.updateData
      }

      const propQueryData = nextPropRaw

      return { propQueryData, propUpdateData }
    }

    // no relation
    return
  }

  /*
   * ONE TO ONE DELETE/ DISCONNECT
   */
  if (prevPropRaw && !nextPropRaw) {
    const relation = getRelation(map, key, 'onDelete')

    if (relation === 'delete' || relation === 'disconnect') {
      return { propQueryData: null, propUpdateData: { [relation]: { id: prevProp.id } } }
    }

    // no relation
    return
  }
}
