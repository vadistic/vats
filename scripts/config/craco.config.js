const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')
const argv = process.argv

const aliasFlagIndex = argv.findIndex(arg => arg === '--alias')
const shouldAlias = aliasFlagIndex !== -1 && process.env.NODE_ENV !== 'production'

const skipTsFlagIndex = argv.findIndex(arg => arg === '--skip')
const shouldSkipTs = skipTsFlagIndex !== -1 && process.env.NODE_ENV === 'development'

const hotModulesFlagIndex = argv.findIndex(arg => arg === '--hot')
const shouldHotModules = hotModulesFlagIndex !== -1 && process.env.NODE_ENV === 'development'

const MONOREPO_PREFIX = '@vats/'

const aliasWebpack = webpackConfig => {
  const aliasPackageName = argv[aliasFlagIndex + 1].includes(MONOREPO_PREFIX)
    ? argv[aliasFlagIndex + 1]
    : MONOREPO_PREFIX + argv[aliasFlagIndex + 1]
  const aliasPackageDirname = aliasPackageName.replace(MONOREPO_PREFIX, '')

  // build alias
  const aliasPath = path.resolve(process.cwd(), '../../packages', aliasPackageDirname, 'src')

  const alias = {
    [aliasPackageName]: aliasPath,
  }

  const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'))

  if (isFound) {
    // remove scope plugin
    webpackConfig.resolve.plugins.splice(-1, 1)

    // add alias
    Object.assign(webpackConfig.resolve.alias, alias)

    // add source to loader
    match.loader.include = [match.loader.include, aliasPath]
  }

  return webpackConfig
}

const skipTsChecker = webpackConfig => {
  webpackConfig.plugins = webpackConfig.plugins.filter(
    plugin => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin',
  )

  return webpackConfig
}

const emotionCssProps = webpackConfig => {
  const { match } = getLoader(webpackConfig, loaderByName('babel-loader'))

  // needs to go after (to be loaded before) react-app-preset
  // https://github.com/emotion-js/emotion/issues/1123#issuecomment-455767886
  // added as plugins because react hot loader breaks it :/
  match.loader.options.presets.push(require('@emotion/babel-preset-css-prop'))

  return webpackConfig
}

const hotModules = webpackConfig => {
  // use patched version of react dom
  webpackConfig.resolve.alias['react-dom'] = '@hot-loader/react-dom'

  const { match } = getLoader(webpackConfig, loaderByName('babel-loader'))

  match.loader.options.plugins.push(['react-hot-loader/babel', { safetyNet: false }])

  return webpackConfig
}

// for some reason using hot loader without babel result in few issues
// it probably mess up with emotion jsx pragma something - better substitute it
// also I do not want it on production
const hotModulesNoop = webpackConfig => {
  webpackConfig.resolve.alias['react-hot-loader'] = '@vats/start/config/noop-hot-loader'

  return webpackConfig
}

// force it not to use absolute paths, because it breaks CI deployments
// https://github.com/facebook/create-react-app/issues/5443#issuecomment-430188464
const configureReactBabelPreset = babelLoaderOptions => {
  babelLoaderOptions.presets = babelLoaderOptions.presets.map(preset => {
    if (typeof preset === 'string' && preset.includes('babel-preset-react-app')) {
      return [preset, { absoluteRuntime: false }]
    }

    if (Array.isArray(preset) && preset[0].includes('babel-preset-react-app')) {
      preset[1].absoluteRuntime = false
      return [preset[0], preset[1]]
    }

    return preset
  })

  return babelLoaderOptions
}

module.exports = {
  babel: {
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      babelLoaderOptions = configureReactBabelPreset(babelLoaderOptions)
      return babelLoaderOptions
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig = emotionCssProps(webpackConfig)

      if (shouldAlias) {
        webpackConfig = aliasWebpack(webpackConfig)
      }

      if (shouldSkipTs) {
        webpackConfig = skipTsChecker(webpackConfig)
      }

      if (shouldHotModules) {
        webpackConfig = hotModules(webpackConfig)
      } else {
        webpackConfig = hotModulesNoop(webpackConfig)
      }

      return webpackConfig
    },
  },
  jest: {
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      jestConfig.moduleNameMapper = Object.assign(jestConfig.moduleNameMapper, {
        'office-ui-fabric-react/lib/(.*)$': 'office-ui-fabric-react/lib-commonjs/$1',
        /*
         * So this is basically a fail... cannot get babel-jest to transform monorepo's esm any other way
         */
        '@vats/(forms|host|i18n|styling|utils)(.*)$': path.resolve(
          process.cwd(),
          '../../packages/$1/src$2',
        ),
      })

      jestConfig.transform = {
        '^.+\\.(js|jsx|ts|tsx)$': require.resolve('./babelTransform.js'),
        '^.+\\.css$': require.resolve('react-scripts/config/jest/cssTransform.js'),
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': require.resolve(
          'react-scripts/config/jest/fileTransform.js',
        ),
      }

      jestConfig.transformIgnorePatterns = [
        '[/\\\\]node_modules[/\\\\](?!vats).+\\.(js|jsx|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
      ]

      return jestConfig
    },
  },
}
