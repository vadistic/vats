import plugin from '@start/plugin'
import find from '@start/plugin-find'
import babel from '@start/plugin-lib-babel'
import read from '@start/plugin-read'
import rename from '@start/plugin-rename'
import sequence from '@start/plugin-sequence'
import write from '@start/plugin-write'

import fs from 'fs-extra'
import path from 'path'

import { cond, filter, sub } from './plugins/mixins'
import { readJson } from './plugins/utils'

interface Manifest {
  // path (relative to package root) => datetime in ms
  [path: string]: number
}

export const config = {
  ROOT_PATH: process.cwd(),
  CACHE_PATH: path.resolve(process.cwd(), 'node_modules', '.cache', '@vats'),
  CACHE_MANIFEST_PATH: path.resolve(
    process.cwd(),
    'node_modules',
    '.cache',
    '@vats',
    'cache-manifest.json',
  ),
  CACHE_DIST_PATH: path.resolve(process.cwd(), 'node_modules', '.cache', '@vats', 'dist'),
  BUILD_DIR: 'build',
  DIST_DIR: 'dist',
  SOURCE_DIR: 'src',
  SOURCE_GLOB: ['**/*.{ts,tsx}'],
  IGNORE_GLOB: [
    '!**/tests/**',
    '!**/__tests__/**',
    '!**/*.test.{ts,tsx}',
    '!**/*.jsxfixture.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
  ],
}

export const transpile = async (args: string[]) => {
  process.env.BABEL_ENV = 'production'
  const pkg = await readJson('package.json')

  const react = args.includes('--react') || Object.keys(pkg.dependencies).includes('react')

  const babelConfig = (react
    ? // ...
      // @ts-ignore
      await import('../config/babel.config.react.js')
    : // ...
      // @ts-ignore
      await import('../config/babel.config.node.js')
  ).default

  const getCacheKey = (filepath: string) => {
    const n = filepath.lastIndexOf(config.SOURCE_DIR) || filepath.lastIndexOf(config.DIST_DIR)

    return filepath
      .slice(n)
      .replace(/^(?:src|dist)\//, '')
      .replace(/\.tsx*$/, '.js')
  }

  return sequence(
    // find source files, ignoring tests etc.
    find([
      ...config.SOURCE_GLOB.map(globPath => `${config.SOURCE_DIR}/${globPath}`),
      ...config.IGNORE_GLOB,
    ]),
    // load stats data
    plugin('read-file-stats', () => async input => {
      const stats = await Promise.all(input.files.map(async file => fs.stat(file.path)))

      return { files: input.files.map((file, i) => ({ ...file, stats: stats[i] })) }
    }),
    // load cache manifest and ensure dir
    plugin('ensure-cache', () => async ({ files }) => {
      let manifest: Manifest

      await fs.ensureDir(config.CACHE_DIST_PATH)

      try {
        manifest = await fs.readJSON(config.CACHE_MANIFEST_PATH)
      } catch (err) {
        await fs.writeJson(config.CACHE_MANIFEST_PATH, {})
        manifest = {}
      }

      return { manifest }
    }),
    // transpile changed sources
    sub(
      sequence(
        // get files with changed mtime
        filter(input => ({
          ...input,
          files: input.files.filter(
            file => input.manifest[getCacheKey(file.path)] !== file.stats.mtimeMs,
          ),
        })),
        cond(
          input => input.files.length > 0,
          sequence(
            // update manifest
            plugin('write-cache-manifest', () => async ({ files, manifest }) => {
              const nextManifest = {
                ...manifest,
                ...files.reduce(
                  (acc, file) => ({ ...acc, [getCacheKey(file.path)]: file.stats.mtimeMs }),
                  {},
                ),
              }

              await fs.writeJSON(config.CACHE_MANIFEST_PATH, nextManifest, {
                encoding: 'utf-8',
                spaces: 2,
                EOL: '\n',
              })

              return { manifest: nextManifest }
            }),
            // read files
            read,
            // compile
            babel(babelConfig),
            rename(file => file.replace(/\.tsx*$/, '.js')),
            write('dist'),
            // write backup to cache
            write(path.relative(process.cwd(), config.CACHE_DIST_PATH)),
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
            file => input.manifest[getCacheKey(file.path)] === file.stats.mtimeMs,
          ),
        })),
        plugin('copy-from-cache', () => async ({ files }) => {
          // tslint:disable-next-line: no-implicit-dependencies
          const { default: copie } = await import('copie')

          return {
            files: await Promise.all(
              files.map(async file => {
                const relativePath = getCacheKey(file.path)
                const target = path.resolve(process.cwd(), config.DIST_DIR, relativePath)
                const source = path.resolve(config.CACHE_PATH, config.DIST_DIR, relativePath)

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
