const hot = module => component => component
const setConfig = obj => {
  if (process.env.NODE_ENV === 'development') {
    console.log('substituting react-hot-loader with noop')
  }
  /* noop */
}

module.exports = {
  hot,
  setConfig,
}
