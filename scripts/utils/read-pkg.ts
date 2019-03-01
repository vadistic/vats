import fs from 'fs-extra'
import path from 'path'

export const readPkg = async () => {
  const PKG_PATH = path.resolve(process.cwd(), './package.json')
  let pkg
  try {
    pkg = await fs.readJSON(PKG_PATH)
  } catch (err) {
    throw Error(`package.json not found`)
  }

  return pkg
}

export default readPkg
