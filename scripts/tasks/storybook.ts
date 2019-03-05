import sequence from '@start/plugin-sequence'
import spawn from '@start/plugin-spawn'

import fs from 'fs-extra'
import path from 'path'

/**
 * Copy config and start storybook
 */
export const storybook = async (args: string[]) => {
  // tslint:disable-next-line: no-implicit-dependencies
  const { default: copie } = await import('copie')

  const source = path.resolve(__dirname, '../.storybook')
  const target = path.resolve(process.cwd(), '.storybook')

  await fs.ensureDir(target)

  const files = await fs.readdir(source)

  files.forEach(file => {
    copie(path.resolve(source, file), path.resolve(target, file))
  })

  const storybookArgs = ['start-storybook', '-p', '9010']

  return sequence(
    spawn(storybookArgs, {
      stdout: process.stdout,
      stderr: process.stderr,
    }),
  )
}
