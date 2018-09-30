import {
  fontSize,
  FontSizeProps,
  height,
  HeightProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  space,
  SpaceProps,
  style,
  width,
  WidthProps,
} from 'styled-system'

import { ITheme } from 'office-ui-fabric-react/lib/Styling'

export interface IColorProps {
  background?: keyof ITheme['palette']
}

const color = style({
  prop: 'color',
  key: 'pallete',
})

export interface IBackgroundProps {
  background?: keyof ITheme['palette']
}

const background = style({
  prop: 'background',
  key: 'palette',
})

export type TBaseStyleProps =
  | HeightProps
  | WidthProps
  | MinHeightProps
  | MinWidthProps
  | SpaceProps
  | FontSizeProps
  | IColorProps
  | IBackgroundProps

export const baseStyle = [height, width, minHeight, minWidth, space, fontSize, color, background]
