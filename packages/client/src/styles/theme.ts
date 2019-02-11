import { SerializedStyles } from '@emotion/core'
import { createTheme, IPartialTheme, ISpacing, ITheme as IFabricTheme } from '@uifabric/styling'

interface IWithUnitInput {
  [inxex: string]: number
}

type WithUnit<T> = { [K in keyof T]: string }

const withUnit = <T extends IWithUnitInput>(unit: string, input: T) =>
  Object.entries(input).reduce(
    (acc, [prop, val]) => ({ ...acc, [prop]: val + unit }),
    // tslint:disable-next-line:no-object-literal-type-assertion
    {} as WithUnit<T>,
  )

const spacingBase = 16

const spacing: ISpacing = withUnit('px', {
  s2: spacingBase / 4,
  s1: spacingBase / 2,
  m: spacingBase,
  l1: spacingBase * 1.25,
  l2: spacingBase * 2,
})

interface ISizing {
  s3: string
  s2: string
  s1: string
  ms: string
  m: string
  ml: string
  l1: string
  l2: string
}

const sizes: ISizing = withUnit('px', {
  s3: spacingBase * 2, // 32
  s2: spacingBase * 4, // 64
  s1: spacingBase * 8, // 128
  ms: spacingBase * 12, // 192
  m: spacingBase * 16, // 256
  ml: spacingBase * 24, // 348
  l1: spacingBase * 32, // 512
  l2: spacingBase * 64, // 1024
})

interface ICustomTheme {
  sizes: ISizing
}

const fabricTheme: IPartialTheme = {
  palette: {
    accent: 'hotpink',
  },
  spacing,
}

const customTheme: ICustomTheme = {
  sizes,
}

export type ITheme = IFabricTheme & ICustomTheme

export interface IThemeProps {
  theme: ITheme
}
export const theme = { ...createTheme(fabricTheme), ...customTheme }

export type CSSProp = SerializedStyles | ((theme: ITheme) => SerializedStyles)
