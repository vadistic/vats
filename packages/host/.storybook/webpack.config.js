module.exports = ({ config }, env) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: require('@vats/start/config/babel.config.react'),
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
