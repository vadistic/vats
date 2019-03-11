import { diff, PreFilterFunction } from 'deep-diff'
import { applyRelationChange, isValidRelationChange } from './relations'
import { applyScalarChange, isValidScalarChange } from './scalars'
import {
  fillEmptyArrayElements,
  squashRelationChanges,
  transformRelationsUpdateData,
  transformScalarsQueryDataToUpdateData,
} from './transform'

export const isNonNested = (path: any[]) => typeof path[0] === 'string' && path.length === 1

export const isNonNestedElement = (path: any[]) =>
  path.length === 2 && typeof path[0] === 'string' && typeof path[1] === 'number'

const isNotEmpty = <T extends object | any[]>(input: T) =>
  (Array.isArray(input) ? input.length : Object.keys(input).length) > 0

export interface RelationsMap {
  onCreate: 'create' | 'connect'
  onDelete: 'delete' | 'disconnect'
}

export interface Relations {
  [index: string]: RelationsMap
}

export type RelationsType<T> = { [K in keyof T]?: RelationsMap }

export interface UpdateDiffOptions {
  map?: Relations
  prefilter?: PreFilterFunction
}

export interface DiffResult<Value> {
  queryData: Partial<Value> | undefined
  updateData: any
}
/**
 * create graphql update data variable by diffing data
 */
export const updateDiff = <Value>(prev: Value, next: Value, options: UpdateDiffOptions = {}) => {
  const scalars: DiffResult<Value> = {
    queryData: undefined,
    updateData: undefined,
  }
  const relations: DiffResult<Value> = {
    queryData: undefined,
    updateData: undefined,
  }

  const updateDiffs = diff<Value, Value>(
    prev,
    next,
    (path, key) => (options.prefilter && options.prefilter(path, key)) || path.length >= 4,
  )

  // returns undefined on empty diff
  if (!updateDiffs) {
    return { scalars, relations, queryData: undefined, updateData: undefined }
  }

  // creating temp pointers because those mutable apply actions are pretty effective in loop
  let _scalarsQueryData = Array.isArray(prev) ? [] : {}
  let _scalarsUpdateData = {}
  let _relationsQueryData = Array.isArray(prev) ? [] : {}
  let _relationsUpdateData = {}

  updateDiffs
    // reverse for correct array diffs update
    .reverse()
    // report multiple deep updates as one first-level prop update
    .reduce(squashRelationChanges(prev), [])
    .forEach(change => {
      const path = change.path

      if (path && isValidScalarChange(change)) {
        const result = applyScalarChange(_scalarsQueryData, _scalarsUpdateData, change, options)

        _scalarsQueryData = result.queryData
        // scalarsUpdateData prepared later in transform fn

        return
      }

      if (path && isValidRelationChange(change, options)) {
        const result = applyRelationChange(
          _relationsQueryData,
          _relationsUpdateData,
          change,
          options,
        )
        _relationsQueryData = result.queryData
        _relationsUpdateData = result.updateData

        return
      }

      console.warn('Diff: skipping invalid change', change)
    })

  _scalarsQueryData = fillEmptyArrayElements(_scalarsQueryData, prev)
  // transforms query data to mutation data value
  _scalarsUpdateData = transformScalarsQueryDataToUpdateData(_scalarsQueryData)

  _relationsQueryData = fillEmptyArrayElements(_relationsQueryData, prev)
  // removes non-unique actions (array reorders etc.)
  _relationsUpdateData = transformRelationsUpdateData(_relationsUpdateData)

  // to return undefined intead of empty objects
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
