const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')

require('@vats/config').envConfig()

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
  const aliasPath = path.resolve(process.cwd(), '..', aliasPackageDirname, 'src')

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

  match.loader.options.presets.push(require.resolve('../preset-emotion'))

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
  webpackConfig.resolve.alias['react-hot-loader'] = '@vats/scripts/noop-hot-loader'

  return webpackConfig
}

module.exports = {
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

      console.log(webpackConfig.module.rules[2].oneOf[1].options.presets)

      return webpackConfig
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        'office-ui-fabric-react/lib/(.*)$': 'office-ui-fabric-react/lib-commonjs/$1',
      },
    },
  },
}
