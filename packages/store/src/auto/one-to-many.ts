import { deepEqual, StringMap } from '@vats/utils'
import { autoUpdate, AutoUpdateHandler } from './auto'
import { getNestedRelations, getRelation } from './utils'

export const handleOneToMany: AutoUpdateHandler = ({
  prevProp,
  nextProp,
  map,
  key,
  prefilter,
  rootPath,
  flatUpdate,
}) => {
  // just for any[] types
  const _prevProp = prevProp as any[]
  const _nextProp = nextProp as any[]

  // now - what if some elements were prefiltered? - this weird case is not supported yet :/

  const deletedElements = _prevProp.filter(
    prevEl => _nextProp.findIndex(nextEl => nextEl.id === prevEl.id) < 0,
  )

  const createdElements = _nextProp.filter(
    nextEl => _prevProp.findIndex(prevEl => prevEl.id === nextEl.id) < 0,
  )

  const intersectionElements = _nextProp.filter(
    nextEl => _prevProp.findIndex(prevEl => prevEl.id === nextEl.id) !== -1,
  )

  const propUpdateData: StringMap<any[]> = {}
  // this handle deleted elements
  // ! needs spread/clone shallow or push for created elements will modify intersection
  const propQueryData: any[] = [...intersectionElements]

  /*
   * ONE TO MANY DELETED ELEMENTS
   */
  const deleteRelation = getRelation(map, key, 'onDelete')

  if (deletedElements.length > 0 && deleteRelation) {
    propUpdateData[deleteRelation] = []

    deletedElements.forEach(deletedEl => {
      propUpdateData[deleteRelation].push({
        id: deletedEl.id,
      })
    })
  }

  /*
   * ONE TO MANY CREATED/CONNECTED ELEMENTS
   */
  const createRelation = getRelation(map, key, 'onCreate')

  if (createdElements.length > 0 && createRelation) {
    if (createRelation === 'connect') {
      propUpdateData.connect = []

      createdElements.forEach(createdEl => {
        propUpdateData.connect.push({
          id: createdEl.id,
        })
        propQueryData.push(createdEl)
      })
    }

    if (createRelation === 'create') {
      propUpdateData.create = []

      createdElements.forEach((createdEl, index) => {
        // it's getting crazy...
        // - created element is raw because prefilter did not check fields of arraay elements
        // - autoUpdate's queryData copy all fields so it should not be partial (except for unsupported nested relations, so ok)
        // - does not need withoutId becasue 'id' field is filtered in autoUpdate scalar update data and should be present in query data
        const data = autoUpdate({}, createdEl, { prefilter, map: getNestedRelations(map, key) }, [
          ...rootPath,
          key,
          index,
        ])

        propUpdateData.create.push(data.updateData)
        propQueryData.push(data.queryData)
      })
    }
  }

  /*
   * ONE TO MANY UPDATED ELEMENTS
   */

  if (!flatUpdate && intersectionElements.length > 0) {
    const flat = getRelation(map, key, 'onUpdate') === 'flat'

    intersectionElements.forEach((intersectionEl, index) => {
      // not that efficient but probably still should be ok
      const prevElement = _prevProp.find(el => el.id === intersectionEl.id)
      const nextElement = _nextProp.find(el => el.id === intersectionEl.id)

      // it's an update since id must match
      // this equlity here is not on prefilterd fileds so e.g. createdAt could trigger it but it's checked in recursion
      if (!deepEqual(prevElement, nextElement)) {
        const data = autoUpdate(
          prevElement,
          nextElement,
          { prefilter, map: getNestedRelations(map, key) },
          [...rootPath, key, index],
          flat,
        )

        // deepequlity was triggered by some filtered field - skip
        if (!data.updateData) {
          return
        }

        // conditionally create update field
        if (!propUpdateData.update) {
          propUpdateData.update = []
        }

        // it needs where/data shape
        propUpdateData.update.push({
          where: { id: intersectionEl.id },
          data: data.updateData,
        })

        // and change query data on index by copying raw value
        propQueryData[index] = _nextProp[index]
      }
    })
  }

  /*
   * ONE TO MANY HANLDE RESULT
   */
  return {
    propQueryData,
    // do not return empty update data
    propUpdateData: Object.keys(propUpdateData).length === 0 ? undefined : propUpdateData,
  }
}
