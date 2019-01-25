import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from '@uifabric/styling'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import * as serviceWorker from './serviceWorker'
import { theme } from './styles/theme'

// here temporary to not reload it on each HMR edit
loadTheme(theme)
// TODO: replace with not proprietiary icons
// http://aka.ms/fabric-assets-license
initializeIcons()

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
