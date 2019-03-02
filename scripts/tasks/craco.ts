import spawn from '@start/plugin-spawn'
import path from 'path'

/**
 * wrapper for craco cli pointing to custom config
 */
export const craco = async (args: string[]) => {
  const [script, ...rest] = args

  if (!script) {
    throw Error('No craco script specified')
  }

  const scripts = ['build', 'start', 'test']

  if (!scripts.includes(script)) {
    throw Error(`Invalid craco script ${script}`)
  }

  const cracoPaths = {
    config: path.relative(process.cwd(), require.resolve(`../config/craco.config.js`)),
    script: require.resolve(`@craco/craco/scripts/${script}`),
  }

  process.env.NODE_ENV = (() => {
    switch (script) {
      case 'build':
        return 'production'
      case 'start':
        return 'development'
      case 'test':
        return 'test'
      default:
        return 'development'
    }
  })()

  const cliArgs = ['node', cracoPaths.script, '--workspace', '--config', cracoPaths.config, ...rest]

  return spawn(cliArgs, {
    stdout: process.stdout,
    stderr: process.stderr,
  })
}
