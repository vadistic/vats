import { createTheme, IPartialTheme, ISpacing, ITheme as IFabricTheme } from '@uifabric/styling'

export type ITheme = IFabricTheme & ICustomTheme

export interface IThemeProps {
  theme: ITheme
}

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

const sizes: ISpacing = withUnit('px', {
  s2: spacingBase * 2, // 32
  s1: spacingBase * 4, // 64
  m: spacingBase * 8, // 128
  l1: spacingBase * 16, // 256
  l2: spacingBase * 32, // 512
})

interface ICustomTheme {
  sizes: ISpacing
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

export const theme = { ...createTheme(fabricTheme), ...customTheme }
