import fs from 'fs-extra'
import path from 'path'

export const readTsconfig = async () => {
  const TSCONFIG_PATH = path.resolve(process.cwd(), './tsconfig.json')
  let tsconfig
  try {
    tsconfig = await fs.readJSON(TSCONFIG_PATH)
  } catch (err) {
    throw Error(`tsconfig.json not found`)
  }

  return tsconfig
}

export default readTsconfig
