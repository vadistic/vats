import find from '@start/plugin-find'
import babel from '@start/plugin-lib-babel'
import read from '@start/plugin-read'
import rename from '@start/plugin-rename'
import sequence from '@start/plugin-sequence'
import write from '@start/plugin-write'
import path from 'path'
import { cond } from './plugins/mixins'
import { readJson } from './plugins/utils'

export const config = {
  ROOT_PATH: process.cwd(),
  BUILD_DIR: 'build',
  DIST_DIR: 'dist',
  SOURCE_GLOB: ['**/*.{ts,tsx}'],
  SOURCE_COPYFILES_GLOB: ['**/generated/**/*.{json, graphql}'],
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
  process.env.NODE_ENV = 'production'

  const pkg = await readJson('package.json')

  const useEmotion = Object.keys(pkg.dependencies).includes('@emotion/core')
  const useNode = !Object.keys(pkg.dependencies).includes('react')

  const browserPreset = useEmotion
    ? require.resolve('../config/babel-preset.emotion.js')
    : require.resolve('../config/babel-preset.react.js')

  // browser packages with 'react' dep will also get cjs module build but with cra preset
  const mainPreset = useNode
    ? require.resolve('../config/babel-preset.node.js')
    : [browserPreset, { useESModules: false }]

  const getBabelConfig = (preset: any) => ({
    presets: [preset],
    plugins: [],
    babelrc: false,
    configFile: false,
  })

  const moduledir = pkg.module && path.dirname(pkg.module)
  const maindir = pkg.main && path.dirname(pkg.main)
  const sourcedir = pkg.source ? path.dirname(pkg.source) : 'src'

  const copyfiles = (dir: string) =>
    sequence(
      find([
        ...config.SOURCE_COPYFILES_GLOB.map(globPath => `${sourcedir}/${globPath}`),
        ...config.IGNORE_GLOB,
      ]),
      read,
      write(dir),
    )

  return sequence(
    // find source files, ignoring tests etc.
    find([
      ...config.SOURCE_GLOB.map(globPath => `${sourcedir}/${globPath}`),
      ...config.IGNORE_GLOB,
    ]),
    // read files
    read,
    cond(
      () => !!moduledir,
      // esm
      sequence(
        babel(getBabelConfig(browserPreset)),
        rename(file => file.replace(/\.tsx*$/, '.js')),
        write(moduledir),
        copyfiles(moduledir),
      ),
    ),
    cond(
      // cjs
      () => !!maindir,
      sequence(
        babel(getBabelConfig(mainPreset)),
        rename(file => file.replace(/\.tsx*$/, '.js')),
        write(maindir),
        copyfiles(maindir),
      ),
    ),
  )
}
