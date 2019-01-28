import { INavLink, INavLinkGroup, Nav } from 'office-ui-fabric-react'
import * as React from 'react'

import { routes } from '../../routes'

export interface INavigationProps {}

export const Navigation: React.FC = () => {
  const main: INavLinkGroup = {
    links: [
      {
        name: 'Home',
        url: routes.home.url,
        isExpanded: true
      }
    ]
  }

  const test: INavLinkGroup = {
    links: [
      {
        name: 'Test',
        url: routes.test.url,
        isExpanded: true,
        links: Object.entries(routes.test.children).map(([name, item]) => ({
          name,
          url: item.url
        }))
      }
    ]
  }

  const onLinkClick = () => {
    console.log('click')
  }

  const groups = process.env.NODE_ENV === 'development' ? [main, test] : [main]

  return (
    <Nav
      groups={groups}
      onLinkClick={onLinkClick}
      expandedStateText={'expanded'}
      collapsedStateText={'collapsed'}
      selectedKey={'key3'}
      expandButtonAriaLabel={'Expand or collapse'}
    />
  )
}
