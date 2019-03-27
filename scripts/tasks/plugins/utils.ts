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

export const copyDir = async (absoluteSource: string, relativeTarget: string) => {
  // tslint:disable-next-line: no-implicit-dependencies
  const { default: copie } = await import('copie')

  const source = absoluteSource
  const target = path.resolve(process.cwd(), relativeTarget)

  await fs.ensureDir(target)

  const files = await fs.readdir(source)

  files.forEach(file => {
    copie(path.resolve(source, file), path.resolve(target, file))
  })
}
