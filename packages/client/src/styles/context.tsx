import { ThemeContext } from '@emotion/core'
import React, { useContext } from 'react'
import { ITheme } from './theme'

export const useTheme = () => useContext<ITheme>(ThemeContext as any)

export interface IThemeProviderProps {
  theme: ITheme
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)
