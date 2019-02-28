import fs from 'fs'
import path from 'path'
import util from 'util'
import { TranslationTypingConfig } from '../src/i18n'

// i18n JSON format
// https://www.i18next.com/misc/json-format

const TRANSLATIONS_DIR = 'src/i18n/translations'
const TARGET_DIR = 'src/generated/translations'

// recursively build i18n json
const buildJson = (key: string, entry: TranslationTypingConfig | object): any => {
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

const main = async () => {
  const files = await util.promisify(fs.readdir)(TRANSLATIONS_DIR)

  const configs = await Promise.all(
    files.map(async file => {
      return [
        path.basename(file, '.ts'),
        await import(path.resolve(TRANSLATIONS_DIR, file)).then(imp => imp.default),
      ]
    }),
  )

  configs.forEach(([lang, config]) => {
    util.promisify(fs.writeFile)(
      path.resolve(TARGET_DIR, `i18n-${lang}.json`),
      JSON.stringify(buildJson('__ROOT__', config), null, 2),
      'utf-8',
    )
  })

  console.log(`i18n json generated: ${configs.map(val => val[0]).join('| ')}`)
}

main()
