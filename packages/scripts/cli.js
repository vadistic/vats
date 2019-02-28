#!/usr/bin/env node

const spawn = require('cross-spawn')
const path = require('path')

const args = process.argv.slice(2)
const scriptIndex = args.findIndex(x =>
  ['app-start', 'app-build', 'app-test', 'start', 'build', 'test'].includes(x),
)
const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []
const scriptArgs = args.slice(scriptIndex + 1)

switch (script) {
  case 'test':
  case 'app-build':
  case 'app-start':
  case 'app-test': {
    const scriptPath = require.resolve(`@craco/craco/scripts/${script.replace('app-', '')}`)

    const configPathArg = path.relative(
      process.cwd(),
      require.resolve(`@vats/scripts/craco/craco.config.js`),
    )

    const processArgs = [
      ...nodeArgs,
      scriptPath,
      '--workspace',
      '--config',
      configPathArg,
      ...scriptArgs,
    ]

    spawn('node', processArgs, { stdio: 'inherit' }).on('exit', exitCode => {
      process.exit(exitCode)
    })

    break
  }
  case 'build': {
    process.env.NODE_ENV = 'production'

    // TODO: use webpack + babel/ts loader

    const ROOT_DIR = 'src'
    const OUT_DIR = 'dist'

    const babelBuildArgs = [
      '--presets',
      '@vats/scripts/preset-react',
      '--out-dir',
      OUT_DIR,
      '--extensions',
      '.ts,.tsx',
      '--ignore',
      '**/tests,**/__tests__,**/__jsxfixtures__,**/*.test.{ts,tsx},**/*.jsxfixture.{ts,tsx},**/*.d.ts',
      '--no-babelrc',
      ROOT_DIR,
    ]

    spawn('babel', babelBuildArgs, { stdio: 'inherit' }).on('exit', exitCode => {
      if (exitCode !== 0) {
        process.exit(exitCode)
      }
    })

    const shouldEmitDeclarations = scriptArgs.includes('--dts')

    if (shouldEmitDeclarations) {
      const tscBuildArgs = ['--project', 'tsconfig.json', '--declaration', '--emitDeclarationOnly']

      spawn('tsc', tscBuildArgs, { stdio: 'inherit' }).on('exit', exitCode => {
        process.exit(exitCode)
      })
    }

    break
  }
  default:
    console.log(`Unknown script "${script}".`)
    break
}
