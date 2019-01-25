import {
  createTheme,
  IPartialTheme,
  ITheme as IFabricTheme
} from '@uifabric/styling'

export type ITheme = IFabricTheme

export interface IThemeProps {
  theme: ITheme
}

const customTheme: IPartialTheme = {
  palette: {
    accent: 'hotpink'
  }
}

export const theme = createTheme(customTheme)
