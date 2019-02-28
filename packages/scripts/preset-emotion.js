// emotion must go second or as plugins
// https://github.com/emotion-js/emotion/issues/1123#issuecomment-455767886

// based on
// https://github.com/emotion-js/emotion/blob/master/packages/babel-preset-css-prop/src/index.js

const jsx = require.resolve('@babel/plugin-transform-react-jsx')
const pragmatic = require.resolve('@emotion/babel-plugin-jsx-pragmatic')
const emotion = require.resolve('babel-plugin-emotion')

const emotionPresetOptions = {
  autoLabel: true,
  labelFormat: '-[dirname]/[filename]--[local]',
  useBuiltIns: false,
  throwIfNamespace: true,
  cssPropOptimization: true,
}

const pragmaName = '___EmotionJSX'

module.exports = () => ({
  plugins: [
    [
      pragmatic,
      {
        export: 'jsx',
        module: '@emotion/core',
        import: pragmaName,
      },
    ],
    [jsx, { pragma: pragmaName, pragmaFrag: 'React.Fragment' }],
    [emotion, emotionPresetOptions],
  ],
})
