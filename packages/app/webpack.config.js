const BUNDLE_NAME = 'app'
const IS_PRODUCTION = process.argv.indexOf('--production') > -1

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    overlay: true,
    progress: true,
    publicPath: '/',
    historyApiFallback: true,
    port: 9000,
  },
}
