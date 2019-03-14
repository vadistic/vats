/**
 * Standard shallow equal implementation
 */
export const shallowEqual = <T>(objA: T, objB: T) => {
  if (objA === objB) {
    return true
  }

  if (!objA || !objB) {
    return false
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false
    }

    const length = objA.length

    for (let i = 0; i < length; i++) {
      if (objA[i] !== objB[i]) {
        return false
      }
    }

    return true
  }

  // ! nulls are checked above
  if (typeof objA === 'object' && typeof objA === 'object') {
    const aKeys = Object.keys(objA)
    const bKeys = Object.keys(objB)

    if (aKeys.length !== bKeys.length) {
      return false
    }

    const length = aKeys.length

    for (let i = 0; i < length; i++) {
      const key = aKeys[i]

      if ((objA as any)[key] !== (objB as any)[key]) {
        return false
      }
    }

    return true
  }

  return false
}

/**
 *  same as shallow, but recursive instead of equality
 */
export const deepEqual = <T>(objA: T, objB: T) => {
  if (objA === objB) {
    return true
  }

  if (!objA || !objB) {
    return false
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false
    }

    const length = objA.length

    for (let i = 0; i < length; i++) {
      if (!deepEqual(objA[i], objB[i])) {
        return false
      }
    }

    return true
  }

  if (typeof objA === 'object' && typeof objA === 'object') {
    const aKeys = Object.keys(objA)
    const bKeys = Object.keys(objB)

    if (aKeys.length !== bKeys.length) {
      return false
    }

    const length = aKeys.length

    for (let i = 0; i < length; i++) {
      const key = aKeys[i]

      if (!deepEqual((objA as any)[key], (objB as any)[key])) {
        return false
      }
    }

    return true
  }

  return false
}
