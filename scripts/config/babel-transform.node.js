// https://github.com/facebook/jest/issues/6229
const babelJest = require('babel-jest')

const babelNode = require('./babel.config.node')

const config = {
  presets: babelNode.presets,
  plugins: babelNode.plugins,
  babelrc: false,
  configFile: false,
}

module.exports = babelJest.createTransformer(config)
