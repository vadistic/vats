// https://github.com/facebook/jest/issues/6229
const babelJest = require('babel-jest')

const config = {
  presets: [
    [require.resolve('@babel/preset-env'), { targets: 'node 8', modules: 'commonjs' }],
    require.resolve('./babel-preset.emotion'),
  ],
  babelrc: false,
  configFile: false,
}

module.exports = babelJest.createTransformer(config)
