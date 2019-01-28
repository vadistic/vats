// https://github.com/emotion-js/emotion/issues/1123#issuecomment-455767886
const emotionPresetOptions = {
  autoLabel: true,
  labelFormat: '[local]',
  useBuiltIns: false,
  throwIfNamespace: true,
}

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions,
)

module.exports = {
  babel: {
    plugins: [...emotionBabelPreset.plugins],
  },
}
