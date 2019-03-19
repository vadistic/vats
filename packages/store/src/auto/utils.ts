import { StringMap } from '@vats/utils'

export interface RelationsMap {
  onCreate: 'create' | 'connect'
  onDelete: 'delete' | 'disconnect'
  onUpdate?: 'deep' | 'flat'
}

export interface Relations {
  [index: string]: RelationsMap & {
    relations?: Relations
  }
}

export const getRelation = (map: Relations | undefined, key: string, type: keyof RelationsMap) =>
  map && map[key] && map[key][type]

export const getNestedRelations = (map: Relations | undefined, key: string) =>
  map && map[key] && map[key].relations

/*
 * pure utils
 */
export const isObject = (input: any): input is StringMap<any> =>
  typeof input === 'object' && input !== null && !Array.isArray(input)

const isScalarLeaf = (input: any): input is number | boolean | string =>
  typeof input === 'number' || typeof input === 'boolean' || typeof input === 'string'

export const withoutId = (input: any) => {
  const { id, ...rest } = input
  return rest
}

/*
 * detect relations
 */
export const oneToOneScalar = (prev: any, next: any) => {
  return isScalarLeaf(prev) || isScalarLeaf(next)
}

export const oneToManyScalar = (prev: any, next: any) => {
  return (
    (Array.isArray(prev) && isScalarLeaf(prev[0])) || (Array.isArray(next) && isScalarLeaf(next[0]))
  )
}

export const oneToOneRelation = (prev: any, next: any) => {
  return isObject(prev) || isObject(next)
}

export const oneToManyRelation = (prev: any, next: any) => {
  return (Array.isArray(prev) && isObject(prev[0])) || (Array.isArray(next) && isObject(next[0]))
}
/*
 * prefilter
 */

export type PreFilterFunction = (path: Array<string | number>, key: any) => boolean

export const defaultPrefilter: PreFilterFunction = (path, key) => {
  return ['__typename', 'createdAt', 'updatedAt', 'deletedAt'].includes(key)
}

/**
 * prefilter, based on provided root path for recursion
 * - skips on no prefilter and return input
 * - skips on primitives and returns them
 * - check root
 * - check all keys of object
 * - check all elements of an array
 * - returns data structurer of the same type (object/array)
 */
export const getPrefilter = (
  prefilter: PreFilterFunction | undefined,
  rootPath: Array<string | number>,
) => (val: any, path: Array<string | number>) => {
  if (!prefilter) {
    return val
  }

  const currentKey = path[path.length - 1]

  // prefilter current key
  // TODO: check if this works right - not sure what should be returned
  if (prefilter([...rootPath, ...path], currentKey)) {
    return isObject(val) ? {} : Array.isArray(val) ? [] : null
  }

  if (isObject(val)) {
    const res: StringMap<any> = {}

    for (const key of Object.keys(val)) {
      if (!prefilter([...rootPath, ...path, key], key)) {
        res[key] = val[key]
      }
    }

    return res
  }

  if (Array.isArray(val)) {
    const res: any[] = []

    for (let i = 0; i < val.length; i++) {
      if (!prefilter([...rootPath, ...path, i], i)) {
        res.push(val[i])
      }
    }

    return res
  }

  // must be some primitive
  return val
}
