module.exports = () => ({
  presets: [
    // isue with preset-react-app & @babel/runtime absolute paths on now deployments
    // https://github.com/facebook/create-react-app/issues/5443#issuecomment-430188464
    [require('babel-preset-react-app'), { absoluteRuntime: false }],
    require('./preset-emotion'),
  ],
})
