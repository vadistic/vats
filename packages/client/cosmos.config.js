// https://github.com/emotion-js/emotion/issues/1123#issuecomment-455767886
// copy-paste from craco.config.js
const emotionPresetOptions = {
  autoLabel: true,
  labelFormat: '[local]',
  useBuiltIns: false,
  throwIfNamespace: true,
}

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions,
)

module.exports = {
  next: true,
  containerQuerySelector: '#root',
  webpackConfigPath: 'react-scripts/config/webpack.config.js',
  webpack: config => {
    const _config = config
    // adding emotion preset to webpack/module/rules/oneOf/(babel-loader for .ts,.tsx)/options/plugins
    // waiting for craco support: https://github.com/sharegate/craco/issues/65
    const plugins = _config.module.rules[2].oneOf[1].options.plugins
    _config.module.rules[2].oneOf[1].options.plugins = [...plugins, ...emotionBabelPreset.plugins]
    return _config
  },

  publicPath: 'public',

  // Hot module replacement
  hot: true,

  // Specify where should webpack watch for fixture files (defaults to rootPath)
  watchDirs: ['src'],

  // Customize dev server
  hostname: 'localhost',
  port: 8989,
}
