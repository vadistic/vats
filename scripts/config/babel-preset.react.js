module.exports = function() {
  const preset = {
    presets: [
      [
        require.resolve('babel-preset-react-app'),
        { absoluteRuntime: false, flow: false, typescript: true },
      ],
    ],
  }

  return preset
}
