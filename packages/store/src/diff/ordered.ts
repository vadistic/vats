import { mutableSetValueIn, recursiveTraverse, tryGetIn } from '@vats/utils'
import { PreFilterFunction } from 'deep-diff'

/*
 * copare primitived and objects by id
 */
export const comparePred = (elA: any, elB: any) => {
  if (elA === null || elB === null) {
    return elA === elB
  }

  // it's some object type (arrays in arrays are not possible in graphql)
  if (typeof elA === 'object' && typeof elB === 'object') {
    return elA.id === elB.id
  }

  // it's some primitive value
  return elA === elB
}

/*
 * keeps order of comparable elements from prev
 */
export const orderedCopy = (prevArr: any[], nextArr: any[]) => {
  const intersectionArr: any[] = []
  // this for handling duplicate values
  const remaining = [...nextArr]

  // copy found elements and omit those not found in next
  prevArr.forEach(prevEl => {
    const nextElIndex = remaining.findIndex(el => comparePred(prevEl, el))

    if (nextElIndex > 0) {
      intersectionArr.push(...remaining.splice(nextElIndex, 1))
    }
  })

  return [...intersectionArr, ...remaining]
}

/**
 * (non mutable) apply next to prev, while keeping shallow prev order in arrays
 */
export const applyShallowOrdered = (prev: any, next: any, prefilter?: PreFilterFunction) => {
  // shortcircut
  if (prev === null || (Array.isArray(prev) && prev.length === 0)) {
    return next
  }

  const result = Array.isArray(next) ? [] : {}

  recursiveTraverse(next, [], (value, path) => {
    // copy simple leafs
    if (
      typeof value === 'boolean' ||
      typeof value === 'string' ||
      typeof value === 'number' ||
      value === null
    ) {
      mutableSetValueIn(result, value, path)
    }

    if (Array.isArray(value)) {
      // set empty array
      if (value.length === 0) {
        mutableSetValueIn(result, [], path)
      } else {
        const prevArr = tryGetIn(prev, ...path)
        const nextValue = prevArr && Array.isArray(prevArr) ? orderedCopy(prevArr, value) : value
        mutableSetValueIn(result, nextValue, path)
      }
    }
  })

  return result
}
