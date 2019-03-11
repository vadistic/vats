import { cloneDeep } from 'apollo-utilities'
import { applyChange, diff, PreFilterFunction } from 'deep-diff'

/**
 * if any, mutate apply structural changes to target and return changes array
 */
export const applyDiff = (target: any, source: any, prefilter?: PreFilterFunction) => {
  // source undefined/ null
  if (!source) {
    return false
  }

  // target undefined/ null
  if (!target) {
    target = cloneDeep(source)
    return true
  }

  const changes = diff(target, source, prefilter)

  if (changes) {
    changes.reverse().forEach(change => {
      applyChange(target, null, change)
    })

    return changes
  }

  return false
}
