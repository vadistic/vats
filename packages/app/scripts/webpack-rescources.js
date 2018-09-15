// Based on this:
// https://github.com/OfficeDev/office-ui-fabric-react/blob/master/scripts/tasks/webpack-resources.js

const webpack = require('webpack')
const path = require('path')
const merge = require('./merge')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const webpackVersion = require('webpack/package.json').version
// tslint:disable-next-line:no-console
console.log(`Webpack version: ${webpackVersion}`)

module.exports = {
  webpack,

  createConfig(packageName, isProduction, customConfig, onlyProduction) {
    const resolveLoader = {
      modules: [
        path.resolve(__dirname, '../node_modules'),
        path.resolve(process.cwd(), 'node_modules'),
      ],
    }

    const module = {
      noParse: [/autoit.js/],
      rules: [
        {
          test: /\.js$/,
          use: 'source-map-loader',
          enforce: 'pre',
        },
      ],
    }

    const devtool = 'cheap-module-source-map'
    const configs = []

    if (!onlyProduction) {
      configs.push(
        merge(
          {
            mode: 'development',
            output: {
              filename: `[name].js`,
              path: path.resolve(process.cwd(), 'dist'),
              pathinfo: false,
            },
            resolveLoader,
            module,
            devtool,
            plugins: getPlugins(packageName, false),
          },
          customConfig
        )
      )
    }

    if (isProduction) {
      configs.push(
        merge(
          {
            mode: 'production',
            output: {
              filename: `[name].min.js`,
              path: path.resolve(process.cwd(), 'dist'),
            },

            resolveLoader,
            module,
            devtool,
            plugins: getPlugins(packageName, true),
          },
          customConfig
        )
      )
    }

    return configs
  },

  createServeConfig(customConfig) {
    const WebpackNotifierPlugin = require('webpack-notifier')

    return merge(
      {
        devServer: {
          inline: true,
          port: 4322,
        },

        mode: 'development',

        resolveLoader: {
          modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(process.cwd(), 'node_modules'),
          ],
        },
        resolve: {
          extensions: ['.ts', '.tsx', '.js'],
        },

        devtool: 'eval',

        module: {
          rules: [
            {
              test: [/\.tsx?$/],
              include: require('@uifabric/webpack-utils/lib/fabricAsyncLoaderInclude'),
              use: [
                '@uifabric/webpack-utils/lib/fabricAsyncLoader.js',
                {
                  loader: 'ts-loader',
                  options: {
                    experimentalWatchApi: true,
                    transpileOnly: true,
                  },
                },
              ],
              exclude: [/node_modules/, /\.scss.ts$/, /\.test.tsx?$/],
            },
            // NO SCSS!
          ],
        },

        plugins: [new ForkTsCheckerWebpackPlugin(), new webpack.ProgressPlugin()],
      },
      customConfig
    )
  },
}

function getPlugins(bundleName, isProduction) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

  const plugins = []

  if (isProduction) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: bundleName + '.stats.html',
        openAnalyzer: false,
        generateStatsFile: true,
        statsOptions: {
          source: false,
          reasons: false,
          chunks: false,
        },
        statsFilename: bundleName + '.stats.json',
        logLevel: 'warn',
      })
    )
  }

  return plugins
}
