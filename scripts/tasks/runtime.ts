import plugin from '@start/plugin'
import sequence from '@start/plugin-sequence'
import path from 'path'

/**
 * run scripts in ts-runtime. Like custom ts-node with babel
 * TODO: pluginize
 */

export const runtime = async (args: string[]) => {
  const scriptPathArg = args[0]

  if (!scriptPathArg) {
    throw Error('need script path as arg')
  }

  const scriptPath = require.resolve(path.resolve(process.cwd(), scriptPathArg))

  // needs reqister babel for cwd()
  // @ts-ignore
  const register = (await import('@babel/register')).default

  register({
    // this to ensure lerna can run scripts in packages
    cwd: process.cwd(),
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
          modules: false,
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-syntax-dynamic-import'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  })

  const script = await import(scriptPath)

  const scriptExportsNames = Object.keys(script)
  const scriptExport =
    args[1] || (scriptExportsNames.includes('default') && 'default') || scriptExportsNames[0]

  await script[scriptExport]()

  // noop
  return sequence(
    plugin('noop', ({ logMessage }) => async () => {
      logMessage(`${scriptExport} from ${scriptPathArg}`)
    }),
  )
}
