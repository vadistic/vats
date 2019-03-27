import sequence from '@start/plugin-sequence'
import spawn from '@start/plugin-spawn'
import path from 'path'
import { copyDirPlugin } from './plugins'

/**
 * Copy config and start storybook
 */
export const storybook = async (args: string[]) => {
  const source = path.resolve(__dirname, '../.storybook')
  const target = '.storybook'

  // set env because why not
  // @ts-ignore
  const { default: config } = await import('../env/dotenv')
  config()

  const storybookArgs = ['start-storybook', '-p', '9010']

  return sequence(
    copyDirPlugin(source, target),
    spawn(storybookArgs, {
      stdout: process.stdout,
      stderr: process.stderr,
    }),
  )
}
