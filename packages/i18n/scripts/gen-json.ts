import fs from 'fs'
import path from 'path'
import util from 'util'
import { buildJson } from '../src/json'

// i18n JSON format
// https://www.i18next.com/misc/json-format

const TRANSLATIONS_DIR = path.resolve(__dirname, '../src/translations')
const TARGET_DIR = path.resolve(__dirname, '../src/generated')

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
    fs.writeFileSync(
      path.resolve(TARGET_DIR, `i18n-${lang}.json`),
      JSON.stringify(buildJson('__ROOT__', config), null, 2),
      'utf-8',
    )
  })

  console.log(`i18n json generated: ${configs.map(val => val[0]).join('| ')}`)
}

export default main
