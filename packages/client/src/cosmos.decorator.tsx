import { initializeIcons, loadTheme } from 'office-ui-fabric-react'
import React from 'react'
import { theme } from './styles'
import { AppWrapper } from './utils/wrappers'

const _window = window as any

// hook to prevent fabric initialization every hot load update
if (!_window.parent.__IS_FABRIC_LOADED__) {
  loadTheme(theme)
  initializeIcons()
  _window.parent.__IS_FABRIC_LOADED__ = true
}

// hack to enable apollo dev tools
_window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ = _window.parent.__APOLLO_DEVTOOLS_GLOBAL_HOOK__
_window.parent.__APOLLO_CLIENT__ = _window.__APOLLO_CLIENT__

export const CosmosWrapper: React.FC = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>
}

export default CosmosWrapper
