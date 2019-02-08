import { Location, navigate } from '@reach/router'
import { INavLink, INavLinkGroup, INavProps, Nav } from 'office-ui-fabric-react'
import React, { useState } from 'react'

import { css } from '@emotion/core'
import { routes } from '../../routes'
import { ITheme } from '../../styles'

export interface INavigationProps {
  groups?: INavLinkGroup[]
}

export const navigationStyles = (theme: ITheme) => css`
  background-color: ${theme.palette.white};
`

export const Navigation: React.FC<INavigationProps> = ({ groups }) => {
  const homeLink: INavLink = routes.home

  const [active, setActive] = useState(homeLink)

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
            <h3 style={{ margin: '20px' }}>Logo</h3>
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
