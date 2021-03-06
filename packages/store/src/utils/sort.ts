import { reverseLoPath, SortDirection, tryGetIn } from '@vats/utils'

const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[+-\.](.{2,6})$/

const compareAb = (a: any, b: any) => (a < b ? -1 : b < a ? 1 : 0)

/*
 * universal compare fn for string, numbers & dates
 * ! does not handle nulls
 */
const compareFn = <T extends string | number>(a: T, b: T) => {
  // compare ISO Date strings
  if (dateRegex.test('' + a)) {
    return compareAb(new Date(a), new Date(b))
  }

  // normalize to lowercase
  if (typeof a === 'string' && typeof b === 'string') {
    return compareAb(a.toLowerCase(), b.toLowerCase())
  }

  // compare nums & booleans
  if (typeof a === 'number' || typeof a === 'boolean') {
    return compareAb(a, b)
  }

  throw Error(`compareFn invalid input: ${a}, ${b}`)
}

export const sortValue = (value: any[], sortBy: string, sortDirection: SortDirection) => {
  const sortByPath = reverseLoPath(sortBy)

  // skip on non-nested sortBy strings that does not match value shape
  if (sortByPath[0] === sortBy && !(sortBy in value[0])) {
    return
  }

  // split array into sortable part and nulls
  const truthy: any[] = []
  const falsely: any[] = []

  for (const el of value) {
    const select = tryGetIn(el, ...sortByPath)

    if (select !== null && select !== undefined) {
      truthy.push(el)
    } else {
      falsely.push(el)
    }
  }

  // not checking for arrays & nulls because it was done before
  const getter = (item: any) => {
    const select = tryGetIn(item, ...sortByPath)
    if (Array.isArray(select)) {
      return select.length
    } else {
      return select
    }
  }

  const sorted = truthy.sort((elA, elB) => sortDirection * compareFn(getter(elA), getter(elB)))

  // nulls first on descending
  return sortDirection === SortDirection.ASCENDING
    ? [...sorted, ...falsely]
    : [...falsely, ...sorted]
}

/**
 * apply sorting to targetProp in target if there are any changes in order
 */
export const sortApply = (
  target: any,
  targetProp: string,
  sortBy: string,
  sortDirection: SortDirection,
) => {
  const value = target[targetProp]

  if (!value) {
    return
  }

  const sortedValue = sortValue(value, sortBy, sortDirection)

  if (!sortedValue) {
    return
  }

  for (let i = 0; i < sortedValue.length; i++) {
    if (sortedValue[i] !== value[i]) {
      target[targetProp] = sortedValue
      break
    }
  }
}
