module.exports = function(api, opts) {
  const preset = {
    presets: [
      [
        require.resolve('babel-preset-react-app'),

        {
          absoluteRuntime: false,
          flow: false,
          typescript: true,
        },
      ],
      require.resolve('@emotion/babel-preset-css-prop'),
    ],
  }

  if (opts.useESModules === false) {
    preset.plugins = [require.resolve('@babel/plugin-transform-modules-commonjs')]
    preset.presets[0][1].useESModules = false
  }

  return preset
}
