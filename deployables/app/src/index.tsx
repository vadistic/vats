import { initStyling } from '@vats/styling'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import * as serviceWorker from './service-worker'

initStyling()

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
