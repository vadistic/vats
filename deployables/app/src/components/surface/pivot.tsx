import { css } from '@emotion/core'
import { IPivotItemProps, IPivotProps, Pivot, PivotItem } from 'office-ui-fabric-react'
import React, { useLayoutEffect } from 'react'
import { useTheme } from '../../styles'

export interface SurfacePivotProps extends IPivotProps {
  items: IPivotItemProps[]
}

export const SurfacePivot: React.FC<SurfacePivotProps> = ({ items, ...rest }) => {
  const theme = useTheme()
  const itemStyles = css`
    padding-top: ${theme.spacing.m};
    padding-bottom: ${theme.spacing.m};
  `

  const renderItems = items.map(({ children, ...itemRest }) => (
    <PivotItem key={itemRest.itemKey} {...itemRest}>
      <div css={itemStyles}>{children}</div>
    </PivotItem>
  ))

  return <Pivot {...rest} children={renderItems} />
}
