import { TranslationTypingConfig } from './types'

export const buildJson = (key: string, entry: TranslationTypingConfig | object): any => {
  if (typeof entry === 'string') {
    return {
      [key]: entry,
    }
  }

  // means it is single type config because 'single' is required
  if ('single' in entry) {
    const result = {
      [key]: entry.single,
    }

    if (entry.plural) {
      result[key + '_plural'] = entry.plural
    }

    if (entry.interval) {
      result[key + '_interval'] = entry.interval
    }

    return result
  }

  if (typeof entry === 'object') {
    const result = Object.entries(entry).reduce(
      (acc, [_key, _entry]) => ({ ...acc, ...buildJson(_key, _entry) }),
      {},
    )

    // for root
    if (key === '__ROOT__') {
      return result
    }

    return {
      [key]: result,
    }
  }

  throw Error('What did I miss?, ekhm: invalid input!')
}
