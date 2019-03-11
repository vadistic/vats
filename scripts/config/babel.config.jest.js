module.exports = {
  presets: [
    [require.resolve('@babel/preset-env'), { targets: 'node 8', modules: 'commonjs' }],
    [
      require.resolve('babel-preset-react-app'),
      { absoluteRuntime: false, flow: false, typescript: true },
    ],
    require.resolve('@emotion/babel-preset-css-prop'),
  ],
  plugins: [require.resolve('@babel/plugin-syntax-dynamic-import')],
  babelrc: false,
  configFile: false,
}
