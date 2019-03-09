import { css } from '@emotion/core'
import { Location, navigate } from '@reach/router'
import { Theme } from '@vats/styling'
import { INavLink, INavLinkGroup, INavProps, Nav } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { routes } from '../../routes'

export interface NavigationProps {
  groups?: INavLinkGroup[]
}

export const navigationStyles = (theme: Theme) => css`
  background-color: ${theme.palette.white};
`

export const Navigation: React.FC<NavigationProps> = ({ groups }) => {
  const homeLink: INavLink = routes.home

  const [, setActive] = useState(homeLink)

  const mainGroup: INavLinkGroup = {
    links: Object.values(routes),
  }

  const onLinkClick: INavProps['onLinkClick'] = (ev, link) => {
    if (ev) {
      ev.preventDefault()
    }
    if (link) {
      setActive(link)
      navigate(link.url)
    }
  }

  return (
    <Location>
      {({ location }) => {
        // TODO: what about nested?
        const keyRegex = /\/[a-z]+/g
        const match = keyRegex.exec(location.pathname)

        return (
          <div css={navigationStyles}>
            <h3 style={{ margin: '20px' }}>Vats</h3>
            <Nav
              groups={groups || [mainGroup]}
              onLinkClick={onLinkClick}
              selectedKey={match ? match[0] : undefined}
              expandButtonAriaLabel={'Expand or collapse'}
            />
          </div>
        )
      }}
    </Location>
  )
}
