module.exports = ({ config }, env) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('@vats/scripts/config/babel-preset.emotion')],
      configFile: false,
      babelrc: false,
    },
  })

  config.resolve.extensions.push('.ts', '.tsx', '.mjs')

  return config
}
