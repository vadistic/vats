import { ThemeContext } from '@emotion/core'
import React, { useContext } from 'react'

import { Theme } from './theme'

export const useTheme = () => useContext<Theme>(ThemeContext as any)

export interface ThemeProviderProps {
  theme: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)
