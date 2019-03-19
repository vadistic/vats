import { deepEqual, StringMap } from '@vats/utils'
import { handleOneToMany } from './one-to-many'
import { handleOneToOne } from './one-to-one'
import {
  defaultPrefilter,
  getPrefilter,
  isObject,
  oneToManyRelation,
  oneToManyScalar,
  oneToOneRelation,
  oneToOneScalar,
  PreFilterFunction,
  Relations,
} from './utils'

export interface AutoUpdateOptions {
  map?: Relations
  prefilter?: PreFilterFunction
}

export interface AutoUpdateResult<Data> {
  queryData: Data
  updateData: any | undefined
}

export interface AutoUpdateHandlerProps {
  prevProp: any
  nextProp: any
  prevPropRaw: any
  nextPropRaw: any
  key: string
  map: Relations | undefined
  prefilter: PreFilterFunction
  rootPath: Array<string | number>
  flatUpdate: boolean
}

export type AutoUpdateHandler = (
  props: AutoUpdateHandlerProps,
) =>
  | {
      propQueryData: any
      propUpdateData: any
    }
  | undefined

export const autoUpdate = <Value extends StringMap>(
  // prev can be superset or subset of next, so no typing
  prev: any,
  next: Value,
  options: AutoUpdateOptions = {},
  rootPath: Array<string | number> = [],
  // flat flag seems necessary for recursive use with onUpdate flat
  // alternative would be to refactor scalar props and use them in loop instead but this seems easier
  flatUpdate: boolean = false,
): AutoUpdateResult<Value> => {
  // double destructuring - this is new for me^^
  const { map, prefilter } = { ...options, prefilter: defaultPrefilter }

  if (!isObject(prev) || !isObject(next)) {
    console.error(prev)
    console.error(next)
    throw Error(`auto data invalid inputs, path ${rootPath}`)
  }

  const prefilterFn = getPrefilter(prefilter, rootPath)

  const queryData: StringMap<any> = {}
  const updateData: StringMap<any> = {}

  const keys = Object.keys(next)

  for (const key of keys) {
    // non-prefiltered raws are necessary to:
    // - build non-partial queryData
    // - detect corrent relation even on prefiltered fields
    const prevPropRaw = prev[key]
    const prevProp = prefilterFn(prev[key], [key])
    const nextPropRaw = next[key]
    const nextProp = prefilterFn(next[key], [key])

    /*
     * EDGE CASE - null with {} provided as prev object
     */
    if ((prevPropRaw === null || prevPropRaw === undefined) && nextPropRaw === null) {
      // add to query but not to udpate data
      queryData[key] = null
    }

    /*
     * ONE TO ONE SCALAR
     * => just copy
     */

    if (oneToOneScalar(prevPropRaw, nextPropRaw)) {
      // returned queryData should contain ommited fields
      queryData[key] = nextPropRaw

      // but id should never be in updateData
      if (!deepEqual(prevProp, nextProp) && key !== 'id') {
        updateData[key] = nextProp
      }

      continue
    }

    /*
     * ONE TO MANY SCALAR
     * => just copy & set: arrays
     */

    if (oneToManyScalar(prevPropRaw, nextPropRaw)) {
      queryData[key] = nextPropRaw

      // same as above
      if (!deepEqual(prevProp, nextProp)) {
        // setting raw because scalar array must also contain possibly prefiltered array elements
        updateData[key] = { set: nextPropRaw }
      }

      continue
    }

    /*
     * ONE TO ONE RELATION
     */

    if (oneToOneRelation(prevPropRaw, nextPropRaw)) {
      queryData[key] = nextPropRaw

      // build update on non equal
      if (!deepEqual(prevProp, nextProp)) {
        const res = handleOneToOne({
          prevProp,
          prevPropRaw,
          nextProp,
          nextPropRaw,
          key,
          map,
          prefilter,
          rootPath,
          flatUpdate,
        })

        if (res) {
          updateData[key] = res.propUpdateData
        }

        /*
         * no res means unsuported one-to-one relation change
         * rigth now - I'm copying query data for sanity
         * but handler functions do not return queryData not reflected in update
         * this may come useful somehow
         */
      }

      continue
    }

    /*
     * ONE TO MANY RELATION
     */

    if (oneToManyRelation(prevProp, nextProp)) {
      /*
       * same - no res means unsuported relation
       * - it would be bothersome to provide all relations for, ever for equal props
       * - for supported relations unshifted element would end up last - this keeps input ordering intact
       *   (if I would want to mimic API response - the results would need to be sorted by id field anyway)
       */

      queryData[key] = nextPropRaw

      // equality check is for each element separatley inside fn
      const res = handleOneToMany({
        prevProp,
        prevPropRaw,
        nextProp,
        nextPropRaw,
        key,
        map,
        prefilter,
        rootPath,
        flatUpdate,
      })

      if (res && res.propUpdateData) {
        updateData[key] = res.propUpdateData
      }

      continue
    }

    /*
     * END OF LOOP
     */
  }

  return {
    queryData: queryData as Value,
    // return undefined with no updates
    updateData: Object.keys(updateData).length === 0 ? undefined : updateData,
  }
}
