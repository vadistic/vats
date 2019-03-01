import plugin from '@start/plugin'
import copy from '@start/plugin-copy'
import find from '@start/plugin-find'
import inputFiles from '@start/plugin-input-files'
import babel from '@start/plugin-lib-babel'
import read from '@start/plugin-read'
import rename from '@start/plugin-rename'
import sequence from '@start/plugin-sequence'
import spawn from '@start/plugin-spawn'
import write from '@start/plugin-write'
import path from 'path'

/*
 * UTILS
 */
const validateCwd = plugin('validate-cwd', () => async () => {
  const { readPkg } = await import('../utils/read-pkg')
  const pkg = await readPkg()

  if (pkg.name.includes('@vats/')) {
    return
  } else {
    throw Error('script called in invalid cwd')
  }
})

/*
 * CONFIG
 */

const ignoreGlob = [
  '!**/tests/**',
  '!**/__tests__/**',
  '!**/*.test.{ts,tsx}',
  '!**/*.jsxfixture.{ts,tsx}',
]

// semantics: dist dir is for transpiled - build for bundled
const DIST_DIR = 'dist'

/*
 * TASKS
 */

export const transpile = async (args: string[]) => {
  process.env.BABEL_ENV = 'production'

  const { readPkg } = await import('../utils/read-pkg')
  const pkg = await readPkg()

  // so semantic variable name...
  const hasEmotion = Object.keys(pkg.dependencies || {}).includes('@emtion/core')

  const hasReact = ([] as string[])
    .concat(Object.keys(pkg.dependencies || {}))
    .concat(Object.keys(pkg.devDependencies || {}))
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

  return sequence(
    validateCwd,
    find(['src/**/*.{ts,tsx}', ...ignoreGlob]),
    read,
    babel(babelConfig),
    rename(file => file.replace(/\.ts$/, '.js')),
    write(DIST_DIR),
  )
}

/**
 * By extension, should be enough
 */
export const copyFiles = async (args: string[]) => {
  const DEFAULT_EXTNAMES = ['json', 'graphql']

  // accept space separated input and remember to remove dots
  const extNames =
    args.length > 0 ? args.map(ext => ext.replace('.', '')).join(',') : DEFAULT_EXTNAMES.join(',')

  return sequence(validateCwd, find([`src/**/*.{${extNames}}`, ...ignoreGlob]), copy(DIST_DIR))
}

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

/**
 * TODO: serve builds (there's small shizzle with relative paths)
 */
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

/**
 * run scripts in ts-runtime. Like custom ts-node with babel
 * TODO: pluginize
 */
export const runtime = async (args: string[]) => {
  const scriptPath = args[0]
  const scriptExport = args[1] || 'default'

  if (!scriptPath) {
    throw Error('need script path as arg')
  }

  const absolutePath = require.resolve(path.resolve(process.cwd(), scriptPath))

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
    extensions: ['.ts', '.js'],
  })

  const script = await import(absolutePath)

  console.log(`running ${scriptExport} from ${scriptPath}`)
  await script[scriptExport]()

  // noop
  return sequence(validateCwd)
}
