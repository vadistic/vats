import { INavLinkGroup, Nav } from 'office-ui-fabric-react'
import * as React from 'react'
import { routes } from '../../routes'

export interface INavigationProps {}

export const Navigation: React.FC = () => {
  const groups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: routes.home.url,
          isExpanded: true
        },
        {
          name: 'Test',
          url: routes.test.url,
          isExpanded: true,
          links: [
            {
              name: 'Persona',
              url: routes.test.children.persona.url
            }
          ]
        }
      ]
    }
  ]

  const onLinkClick = () => {
    console.log('click')
  }

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
