import { initializeIcons, loadTheme } from 'office-ui-fabric-react'
import React, { useEffect } from 'react'
import { theme } from './styles'
import { AppWrapper } from './utils/wrappers'

export const CosmosWrapper: React.FC = ({ children }) => {
  useEffect(() => {
    // load fabric
    loadTheme(theme)
    initializeIcons()

    // hack to enable apollo dev tools
    const _window = window as any
    _window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ = _window.parent.__APOLLO_DEVTOOLS_GLOBAL_HOOK__
    _window.parent.__APOLLO_CLIENT__ = _window.__APOLLO_CLIENT__
  })

  return <AppWrapper>{children}</AppWrapper>
}

export default CosmosWrapper
