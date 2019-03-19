import { deepEqual, StringMap } from '@vats/utils'

/**
 * copare equality or id prop value
 */
const compareEqOrId = (elA: any, elB: any) => {
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

/**
 * copy source and keeps order of comparable elements from target
 */
export const orderedCopyArr = (target: any[], source: any[]) => {
  const intersectionArr: any[] = []
  // this for handling duplicate values
  const remaining = [...source]

  // copy found elements and omit those not found in next
  target.forEach(prevEl => {
    const nextElIndex = remaining.findIndex(el => compareEqOrId(prevEl, el))

    if (nextElIndex >= 0) {
      intersectionArr.push(...remaining.splice(nextElIndex, 1))
    }
  })

  return [...intersectionArr, ...remaining]
}

/**
 * on props that are arrays- use orderedCopyArr
 */
export const orderedCopyObject = (target: any, source: any) => {
  const resultObj: any = {}

  for (const key of Object.keys(source)) {
    const targetProp = (target as any)[key]
    const sourceProp = (source as any)[key]

    resultObj[key] =
      Array.isArray(sourceProp) && Array.isArray(targetProp)
        ? orderedCopyArr(targetProp, sourceProp)
        : sourceProp
  }

  return resultObj
}

/**
 * [MUTABLE!] apply source value to target, while keeping target's order in arrays on semi-shallow level
 * - it's meant to be used on store data (graphql response)
 * - it selectively mutate args for efficient use with mobx observables
 *
 * semi-shallow level means on each data prop (graphql response root value):
 *  - objects will have sorted props that are arrays
 *  - arrays will have objects with sorted sorted props that are arrays (update only when deepEqual changes)
 */

export const orderedApply = <T extends StringMap<any>>(target: T, source: T) => {
  // shouldSkip apllying ordered object
  const shouldSkip = (a: any, b: any) =>
    // for various nulls
    a === null ||
    b === null ||
    a === undefined ||
    b === undefined ||
    // for primitve values
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    // for empty arrays
    (Array.isArray(a) && a.length === 0) ||
    (Array.isArray(b) && b.length === 0)

  for (const key of Object.keys(source)) {
    const targetProp = target[key]
    const sourceProp = source[key]

    // shortcircut
    if (shouldSkip(targetProp, sourceProp)) {
      target[key] = sourceProp
      return
    }

    // handle object value
    if (!Array.isArray(targetProp) && !Array.isArray(sourceProp)) {
      target[key] = orderedCopyObject(targetProp, sourceProp)
      return
    }

    // handle array value
    if (Array.isArray(targetProp) && Array.isArray(sourceProp)) {
      const orderedSourceProp = orderedCopyArr(targetProp, sourceProp)

      // delete elements from target that do not match orderedSource
      // need to do it to have matching indexes for deep equality in next loop
      // could more efficient to do in one loop with orderedCopyArr but nvm
      for (let i = 0; i < targetProp.length; i++) {
        if (!compareEqOrId(targetProp[i], orderedSourceProp[i])) {
          targetProp.splice(i, 1)
          // handle moving loop index
          i -= 1
        }
      }

      // ordered copy or just set nonEqual elements
      for (let i = 0; i < orderedSourceProp.length; i++) {
        if (!deepEqual(targetProp[i], orderedSourceProp[i])) {
          target[key][i] = shouldSkip(targetProp[i], orderedSourceProp[i])
            ? orderedSourceProp[i]
            : orderedCopyObject(targetProp[i], orderedSourceProp[i])
        }
      }

      return
    }
  }
}
