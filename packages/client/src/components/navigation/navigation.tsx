import { navigate } from '@reach/router'
import { INav, INavLink, INavLinkGroup, INavProps, Nav } from 'office-ui-fabric-react'
import React, { useState } from 'react'

import { routes } from '../../routes'

export interface INavigationProps {
  groups?: INavLinkGroup[]
}

export const Navigation: React.FC<INavigationProps> = ({ groups }) => {
  const homeLink: INavLink = {
    name: 'Home',
    key: routes.home.url,
    url: routes.home.url,
    isExpanded: true,
  }

  const [active, setActive] = useState(homeLink)

  const mainGroup: INavLinkGroup = {
    links: [homeLink],
  }

  const onLinkClick: INavProps['onLinkClick'] = (ev, item) => {
    if (item) {
      setActive(item)
      navigate(item.url)
    }
  }

  return (
    <div>
      <h3 style={{ margin: '20px' }}>Logo</h3>
      <Nav
        groups={groups || [mainGroup]}
        onLinkClick={onLinkClick}
        selectedKey={active.url}
        expandButtonAriaLabel={'Expand or collapse'}
      />
    </div>
  )
}
