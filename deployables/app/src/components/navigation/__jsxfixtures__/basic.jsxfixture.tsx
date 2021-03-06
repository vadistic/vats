import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import { INavLinkGroup } from 'office-ui-fabric-react'
import React from 'react'
import { Navigation } from '../navigation'

const navigationFxtureStyles = (theme: Theme) => css`
  width: ${theme.sizes.l1};
  background-color: ${theme.palette.white};
`

// keys need to match url
const group: INavLinkGroup = {
  links: [
    {
      name: 'Home',
      url: '#home',
      key: '#home',
      isExpanded: true,
      links: [
        {
          name: 'Activity',
          url: '#activity',
          key: '#activity',
        },
        {
          name: 'Tasks',
          url: '#tasks',
          key: '#tasks',
        },
      ],
    },
    { name: 'Applications', url: '#applications', key: '#applications' },
    { name: 'Jobs', url: '#jobs', key: '#jobs' },
    { name: 'Insights', url: '#insights', key: '#insights' },
    { name: 'Settings', url: '#settings', key: '#settings' },
  ],
}

export const NavigationBasicFixture: React.FC = () => (
  <div css={navigationFxtureStyles}>
    <Navigation groups={[group]} />
  </div>
)

export default <NavigationBasicFixture />
