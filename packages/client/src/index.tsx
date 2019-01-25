import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import * as serviceWorker from './serviceWorker'

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
