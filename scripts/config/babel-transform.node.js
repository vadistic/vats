// https://github.com/facebook/jest/issues/6229
const babelJest = require('babel-jest')

const config = {
  presets: require.resolve('./babel-preset.node'),
  babelrc: false,
  configFile: false,
}

module.exports = babelJest.createTransformer(config)
