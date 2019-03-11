// https://github.com/facebook/jest/issues/6229
const babelJest = require('babel-jest')
const path = require('path')

const config = require('./babel.config.jest.js')

module.exports = babelJest.createTransformer(config)
