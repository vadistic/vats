import { css } from '@emotion/core'
import { StoreSortDirection } from '@vats/store'
import { useTheme } from '@vats/styling'
import { DefaultButton, Icon } from 'office-ui-fabric-react'
import React from 'react'

export interface SortCalloutItem {
  key: string
  name: string
  type: 'boolean' | 'string' | 'date' | 'number'
}

export type OnSortChanged = ({ sortBy, sortDirection }: SortCalloutSortProps) => void

export interface SortCalloutSortProps {
  sortBy: string
  sortDirection: StoreSortDirection
}

export interface SortCalloutProps extends SortCalloutSortProps {
  items: SortCalloutItem[]
  onSortChanged: OnSortChanged
}

export const SortCallout: React.FC<SortCalloutProps> = ({
  items,
  onSortChanged,
  sortBy,
  sortDirection,
}) => {
  const theme = useTheme()

  const buttonstyles = css`
    width: ${theme.sizes.s2};

    ${theme.fonts.smallPlus as any}

    .chevron {
      margin-right: ${theme.spacing.s2};
      margin-left: ${theme.spacing.s2};
    }
  `

  const renderButton = (
    a: JSX.Element | string,
    z: JSX.Element | string,
    item: SortCalloutItem,
    direction: StoreSortDirection,
  ) => (
    <DefaultButton
      css={buttonstyles}
      primary={item.key === sortBy && sortDirection === direction}
      onClick={() => onSortChanged({ sortBy: item.key, sortDirection: direction })}
    >
      <span>{a}</span> <Icon className="chevron" iconName="chevronright" /> <span>{z}</span>
    </DefaultButton>
  )

  const rowStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      padding: ${theme.spacing.s2};
    }
  `

  const renderRow = (item: SortCalloutItem) => {
    let a: JSX.Element | string = ''
    let z: JSX.Element | string = ''

    if (item.type === 'string') {
      a = 'A'
      z = 'Z'
    }

    if (item.type === 'number') {
      a = '0'
      z = '9'
    }

    if (item.type === 'boolean') {
      a = <Icon iconName="Checkbox" />
      z = <Icon iconName="CheckboxComposite" />
    }

    if (item.type === 'date') {
      a = <Icon iconName="PartlyCloudyDay" />
      z = <Icon iconName="PartlyCloudyNight" />
    }

    return (
      <div key={item.key} css={rowStyles}>
        <div>
          <span>{item.name}</span>
        </div>
        <div>
          {renderButton(a, z, item, 1)}
          {renderButton(z, a, item, -1)}
        </div>
      </div>
    )
  }

  return <div>{items.map(renderRow)}</div>
}
