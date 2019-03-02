import plugin, { StartPlugin } from '@start/plugin'
import copy from '@start/plugin-copy'
import find from '@start/plugin-find'
import babel from '@start/plugin-lib-babel'
import read from '@start/plugin-read'
import rename from '@start/plugin-rename'
import sequence from '@start/plugin-sequence'
import spawn from '@start/plugin-spawn'
import write from '@start/plugin-write'
import fs from 'fs-extra'
import path from 'path'

/*
 * CONFIG
 */
const CACHE_DIR = path.resolve(process.cwd(), 'node_modules', '.cache', '@vats')

const ignoreGlob = [
  '!**/tests/**',
  '!**/__tests__/**',
  '!**/*.test.{ts,tsx}',
  '!**/*.jsxfixture.{ts,tsx}',
]

/**
 *  MIXINS
 */

const sub = <In, Out>(fn: StartPlugin<In, Out>) =>
  plugin<In, In>('sub', ({ reporter }) => async input => {
    const pluginRunner = await fn

    await pluginRunner(reporter)(input)

    return input
  })

const filter = <In>(fn: (input: In) => In) =>
  plugin<In, In>('filter', () => async input => fn(input))

const cond = <In, Out>(condition: (input: In) => boolean, fn: StartPlugin<In, Out>) =>
  plugin<In, In>('cond', ({ reporter, logMessage }) => async input => {
    if (condition(input)) {
      const pluginRunner = await fn

      await pluginRunner(reporter)(input)
    } else {
      logMessage('skipping')
    }

    return input
  })

/**
 *  TRANSPILE
 */

export const transpile = async () => {
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

  const getCacheKey = (filepath: string) => {
    const n = filepath.lastIndexOf('src') || filepath.lastIndexOf('dist')

    return filepath
      .slice(n)
      .replace(/^(?:src|dist)\//, '')
      .replace(/\.tsx*$/, '.js')
  }

  interface Manifest {
    // path (relative to package root) => datetime in ms
    [path: string]: number
  }

  return sequence(
    // find source files, ignoring tests etc.
    find(['src/**/*.{ts,tsx}', ...ignoreGlob]),
    // load stats data
    plugin('read-file-stats', () => async input => {
      const stats = await Promise.all(input.files.map(async file => fs.stat(file.path)))

      return { files: input.files.map((file, i) => ({ ...file, stats: stats[i] })) }
    }),
    // load cache manifest and ensure dir
    plugin('read-cache-manifest', () => async () => {
      await fs.ensureDir(path.resolve(CACHE_DIR, 'dist'))

      const manifestPath = path.resolve(CACHE_DIR, 'cache-manifest.json')

      let mainfest: Manifest

      try {
        mainfest = await fs.readJSON(manifestPath)
      } catch (err) {
        await fs.ensureFile(manifestPath)
        await fs.writeJson(manifestPath, {})
        mainfest = {}
      }

      return { mainfest }
    }),
    // transpile changed sources
    sub(
      sequence(
        // get files with changed mtime
        filter(input => ({
          ...input,
          files: input.files.filter(
            file => input.mainfest[getCacheKey(file.path)] !== file.stats.mtimeMs,
          ),
        })),
        cond(
          input => input.files.length > 0,
          sequence(
            // update manifest
            plugin('write-cache-manifest', () => async ({ files, mainfest }) => {
              const nextManifest = {
                ...mainfest,
                ...files.reduce(
                  (acc, file) => ({ ...acc, [getCacheKey(file.path)]: file.stats.mtimeMs }),
                  {},
                ),
              }

              await fs.writeJSON(path.resolve(CACHE_DIR, 'cache-manifest.json'), nextManifest)

              return { mainfest: nextManifest }
            }),
            // read files
            read,
            // compile
            babel(babelConfig),
            rename(file => file.replace(/\.tsx*$/, '.js')),
            write('dist'),
            // write backup to cache
            write(path.relative(process.cwd(), path.resolve(CACHE_DIR, 'dist'))),
          ),
        ),
      ),
    ),
    // copy unchanged sources
    sub(
      sequence(
        filter(input => ({
          ...input,
          files: input.files.filter(
            file => input.mainfest[getCacheKey(file.path)] === file.stats.mtimeMs,
          ),
        })),
        plugin('copy-from-cache', () => async ({ files }) => {
          // tslint:disable-next-line: no-implicit-dependencies
          const { default: copie } = await import('copie')

          return {
            files: await Promise.all(
              files.map(async file => {
                const relativePath = getCacheKey(file.path)
                const target = path.resolve(process.cwd(), 'dist', relativePath)
                const source = path.resolve(CACHE_DIR, 'dist', relativePath)

                try {
                  require.resolve(target)
                } catch (err) {
                  await fs.ensureDir(path.dirname(target))
                  await copie(source, target)
                }

                return file
              }),
            ),
          }
        }),
      ),
    ),
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

  return sequence(find([`src/**/*.{${extNames}}`, ...ignoreGlob]), copy('dist'))
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
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  })

  const script = await import(absolutePath)

  await script[scriptExport]()

  // noop
  return sequence(
    plugin('noop', ({ logMessage }) => async () => {
      logMessage(`${scriptExport} from ${scriptPath}`)
    }),
  )
}
