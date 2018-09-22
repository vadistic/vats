const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const BUNDLE_NAME = 'app'
const OUT_DIR = 'dist'

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  devtool: 'none',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, OUT_DIR),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                ['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                'react-hot-loader/babel',
              ],
            },
          },
          // {
          //   loader: 'ts-loader',
          //   options: {
          //     experimentalWatchApi: true,
          //     transpileOnly: true,
          //   },
          // },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js'],
  },
  plugins: [
    // new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true,
    }),
    new Dotenv({
      safe: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    hot: true,
    open: false,
    overlay: true,
    stats: 'minimal',
    progress: true,
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
    port: 1234,
  },
}
