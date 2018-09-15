import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from '@uifabric/styling'

import App from './App'
import { defaultThemeNeutral } from './styles'

// Here temporary to not reload it on each HMR edit
// TODO: move to ./App
loadTheme(defaultThemeNeutral)
// TODO: Replace with not proprietiary icons
initializeIcons()

ReactDOM.render(<App />, document.getElementById('root'))
