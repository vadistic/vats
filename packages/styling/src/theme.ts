import { SerializedStyles } from '@emotion/core'
import {
  createTheme,
  IEffects,
  IFontStyles,
  IPalette,
  IPartialTheme,
  ISemanticColors,
  IStyle,
} from '@uifabric/styling'
import { StringMap } from '@vats/utils'

const withUnit = <T extends StringMap<number>>(unit: string, input: T) =>
  Object.entries(input).reduce((acc, [prop, val]) => ({ ...acc, [prop]: val + unit }), {} as {
    [K in keyof T]: string
  })

const spacingBase = 16

interface Spacing {
  /** 4px */
  s2: string
  /** 8px */
  s1: string
  /** 12px */
  ms: string
  /** 16px */
  m: string
  /** 20px */
  ml: string
  /** 32px */
  l1: string
  /** 64px */
  l2: string
}

const spacing: Spacing = withUnit('px', {
  s2: spacingBase / 4,
  s1: spacingBase / 2,
  ms: spacingBase * 0.75,
  m: spacingBase,
  ml: spacingBase * 1.25,
  l1: spacingBase * 2,
  l2: spacingBase * 4,
})

interface Sizing {
  /** 32px */
  s3: string
  /** 64px */
  s2: string
  /** 128px */
  s1: string
  /** 192px */
  ms: string
  /** 256px */
  m: string
  /** 348px */
  ml: string
  /** 512px */
  l1: string
  /** 1024px */
  l2: string
}

const sizes: Sizing = withUnit('px', {
  s3: spacingBase * 2,
  s2: spacingBase * 4,
  s1: spacingBase * 8,
  ms: spacingBase * 12,
  m: spacingBase * 16,
  ml: spacingBase * 24,
  l1: spacingBase * 32,
  l2: spacingBase * 64,
})

interface FabricTheme {
  palette: IPalette
  fonts: IFontStyles
  semanticColors: ISemanticColors
  isInverted: boolean
  effects: IEffects
  disableGlobalClassNames: boolean
}

export interface Theme extends FabricTheme {
  /** for sizing components (height, width...) */
  sizes: Sizing
  /** for spacing components (padding, margin...) */
  spacing: Spacing
}

const fabricTheme: IPartialTheme = {
  palette: {
    themePrimary: '#5218fa', // han purple
    themeLighterAlt: '#f8f6ff',
    themeLighter: '#e3dafe',
    themeLight: '#cab9fd',
    themeTertiary: '#9674fc',
    themeSecondary: '#6634fb',
    themeDarkAlt: '#4916e1',
    themeDark: '#3e13be',
    themeDarker: '#2d0e8c',
    neutralLighterAlt: '#f6f6f6',
    neutralLighter: '#f2f2f2',
    neutralLight: '#e8e8e8',
    neutralQuaternaryAlt: '#d8d8d8',
    neutralQuaternary: '#cecece',
    neutralTertiaryAlt: '#c6c6c6',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#fcfcfc',
  },
}

export const theme: Theme = {
  ...createTheme(fabricTheme),
  spacing,
  sizes,
}

export interface ThemeProps {
  theme: Theme
}

export type CSSProp = SerializedStyles | ((theme: Theme) => SerializedStyles)

export interface CSSPropProps {
  css?: CSSProp
}

export interface FabricStyles {
  [index: string]: IStyle
}
