module.exports = function() {
  const preset = {
    presets: [
      [
        require.resolve('babel-preset-react-app'),
        { absoluteRuntime: false, flow: false, typescript: true },
      ],
      require.resolve('@emotion/babel-preset-css-prop'),
    ],
  }

  return preset
}
