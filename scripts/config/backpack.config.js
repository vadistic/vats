require('@vats/scripts').config()

const babelConfigNode = require('./babel.config.node')

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./src/index.ts']

    config.resolve = {
      extensions: ['.ts', '.js', '.json', '.graphql', '.webpack.js', '.web.js', '.mjs'],
    }

    const babelLoader = config.module.rules[0]

    babelLoader.test = /\.(js|jsx|ts|tsx)$/

    babelLoader.options.presets = babelConfigNode.presets
    babelLoader.options.plugins = babelConfigNode.plugins

    if (options.env === 'production') {
      // allow bundling graphql
      // https://github.com/graphql/graphql-js/issues/1272
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })

      // config.externals = undefined
      config.devtool = false
      config.plugins.splice(1, 1)
    }

    return config
  },
}
