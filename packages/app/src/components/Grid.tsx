import { css } from 'react-emotion'
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  gridColumn,
  GridColumnProps,
  gridGap,
  GridGapProps,
  gridRow,
  GridRowProps,
  gridTemplateColumns,
  gridTemplateRows,
  GridTemplatesColumnsProps,
  GridTemplatesRowsProps,
  justifyContent,
  JustifyContentProps,
  justifySelf,
  JustifySelfProps,
} from 'styled-system'

import { baseStyle, styled, TBaseStyleProps } from '../styles'

export type TGridContainerProps =
  | TBaseStyleProps
  | GridGapProps
  | GridTemplatesColumnsProps
  | GridTemplatesRowsProps
  | AlignItemsProps
  | JustifyContentProps

export const Container = styled('div')<TGridContainerProps>(
  css`
    display: grid;
    width: 100%;
    min-height: fit-content;
    grid-template-columns: repeat(12, 1fr);
    max-width: 1600px;
  `,
  ...baseStyle,
  gridGap,
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  justifyContent
)

export type TGridItemProps =
  | TBaseStyleProps
  | GridColumnProps
  | GridRowProps
  | JustifySelfProps
  | AlignSelfProps
  | AlignItemsProps
  | JustifyContentProps

export const Item = styled('div')<TGridItemProps>(
  css`
    /* display: flex;
    flex-flow: row wrap; */
  `,
  ...baseStyle,
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf,
  alignItems,
  justifyContent
)

export type TGridSectionProps = TBaseStyleProps

const Section = styled('section')<TGridSectionProps>(
  css`
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
  `,
  ...baseStyle
)

export const Grid = { Container, Item, Section }
