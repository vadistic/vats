import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import { loadTheme } from 'office-ui-fabric-react/lib/Styling'

import App from './App'
import { defaultThemeNeutral } from './styles'

// Here temporary to not reload it on each HMR edit
// TODO: move to ./App
loadTheme(defaultThemeNeutral)
// TODO: Replace with not proprietiary icons
initializeIcons()

ReactDOM.render(<App />, document.getElementById('root'))

// @ts-ignore
module.hot.accept()
