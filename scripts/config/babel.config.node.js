module.exports = {
  presets: [require.resolve('babel-preset-backpack'), require.resolve('@babel/preset-typescript')],
  plugins: [require.resolve('@babel/plugin-syntax-dynamic-import')],
}
