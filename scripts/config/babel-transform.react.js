// https://github.com/facebook/jest/issues/6229
const babelJest = require('babel-jest')

const babelReact = require('./babel.config.react')

const config = {
  presets: [
    [require.resolve('@babel/preset-env'), { targets: 'node 8', modules: 'commonjs' }],
    ...babelReact.presets,
  ],
  babelrc: false,
  configFile: false,
}

module.exports = babelJest.createTransformer(config)
