import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from '@uifabric/styling'
import { theme } from './theme'

export const initStyling = () => {
  const _window = window as any

  // hook to prevent fabric initialization every reload
  if (!_window.__IS_FABRIC_LOADED__) {
    loadTheme(theme)
    // TODO: replace with not proprietiary icons
    initializeIcons()
    _window.__IS_FABRIC_LOADED__ = true
  }
}
