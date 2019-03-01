import plugin from '@start/plugin'
import find from '@start/plugin-find'
import inputFiles from '@start/plugin-input-files'
import babel from '@start/plugin-lib-babel'
import read from '@start/plugin-read'
import rename from '@start/plugin-rename'
import sequence from '@start/plugin-sequence'
import spawn from '@start/plugin-spawn'
import write from '@start/plugin-write'
import path from 'path'

const validateCwd = plugin('validate-cwd', () => async () => {
  const { readPkg } = await import('../utils/read-pkg')
  const pkg = await readPkg()

  if (pkg.name.includes('@vats/')) {
    return
  } else {
    throw Error('script called in invalid cwd')
  }
})

export const transpile = async (args: string[]) => {
  process.env.BABEL_ENV = 'production'

  const { readPkg } = await import('../utils/read-pkg')
  const pkg = await readPkg()

  // so semantic variable name...
  const hasEmotion = Object.keys(pkg.dependencies || {}).includes('@emtion/core')

  const hasReact = Object.keys(pkg.dependencies || {})
    .concat(Object.keys(pkg.peerDependencies || {}))
    .includes('react')

  const babelConfig = {
    babelrc: false,
    presets: (await import('../config/babel.preset')).create({
      node: !hasReact,
      react: hasReact,
      emotion: hasEmotion,
    }),
  }

  const ignoreGlob = [
    '!**/tests/**',
    '!**/__tests__/**',
    '!**/*.test.{ts,tsx}',
    '!**/*.jsxfixture.{ts,tsx}',
  ]

  return sequence(
    validateCwd,
    find(['src/**/*.{ts,tsx}', ...ignoreGlob]),
    read,
    babel(babelConfig),
    rename(file => file.replace(/\.ts$/, '.js')),
    write('dist/'),
  )
}

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
    config: path.relative(process.cwd(), require.resolve(`../craco/craco.config.js`)),
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

  const buildArgs = [
    'node',
    cracoPaths.script,
    '--workspace',
    '--config',
    cracoPaths.config,
    ...rest,
  ]

  return spawn(buildArgs, {
    stdout: process.stdout,
    stderr: process.stderr,
  })
}

export const serve = async (args: string[]) => {
  const BUILD_DIR = 'build'
  const serveArgs = ['serve', '--single', BUILD_DIR, ...args]

  const { readPkg } = await import('../utils/read-pkg')
  const pkg = await readPkg()

  const basepath = (pkg.homepage || '').replace(/.*\.[A-z]+\//, '').replace(/\/$/, '')

  if (pkg.homepage && basepath !== '') {
    throw Error(`homepage is set in package.json and 'serve' cannot redirect it`)
  }

  return sequence(
    spawn(serveArgs, {
      stdout: process.stdout,
      stderr: process.stderr,
    }),
  )
}
