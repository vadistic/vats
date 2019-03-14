import fs from 'fs-extra'
import path from 'path'

export const readJson = async (filename: string) => {
  let json
  try {
    json = await fs.readJSON(path.resolve(process.cwd(), filename))
  } catch (err) {
    throw Error(`${filename} not found`)
  }

  return json
}
