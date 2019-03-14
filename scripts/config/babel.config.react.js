module.exports = {
  presets: [
    [
      require.resolve('babel-preset-react-app'),
      { absoluteRuntime: false, flow: false, typescript: true },
    ],
    require.resolve('@emotion/babel-preset-css-prop'),
  ],
  babelrc: false,
  configFile: false,
}
