import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from '@uifabric/styling'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import * as serviceWorker from './service-worker'
import { theme } from './styles/theme'

const _window = window as any

// hook to prevent fabric initialization every hot load update
if (!_window.__IS_FABRIC_LOADED__) {
  loadTheme(theme)
  // TODO: replace with not proprietiary icons
  initializeIcons()
  _window.__IS_FABRIC_LOADED__ = true
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

if (module.hot) {
  module.hot.accept('./app', () => {
    const HotApp = require('./app').default
    ReactDOM.render(<HotApp />, root)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
