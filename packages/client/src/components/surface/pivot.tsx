import { css } from '@emotion/core'
import { IPivotItemProps, IPivotProps, Pivot, PivotItem } from 'office-ui-fabric-react'
import React from 'react'
import { useTheme } from '../../styles'

export interface ISurfacePivotProps extends IPivotProps {
  items: IPivotItemProps[]
}

export const SurfacePivot: React.FC<ISurfacePivotProps> = ({ items, ...rest }) => {
  const theme = useTheme()
  const itemStyles = css`
    padding-top: ${theme.spacing.m};
    padding-bottom: ${theme.spacing.m};
  `

  return (
    <Pivot {...rest}>
      {items.map(({ children, ...itemRest }) => (
        <PivotItem key={itemRest.itemKey} {...itemRest}>
          <div css={itemStyles}>{children}</div>
        </PivotItem>
      ))}
    </Pivot>
  )
}
