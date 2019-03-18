import { css } from '@emotion/core'
import { Location, navigate } from '@reach/router'
import { useTranslation } from '@vats/i18n'
import { Theme } from '@vats/styling'
import { INavLinkGroup, INavProps, Nav } from 'office-ui-fabric-react'
import React from 'react'

export interface NavigationProps {
  groups?: INavLinkGroup[]
}

export const navigationStyles = (theme: Theme) => css`
  background-color: ${theme.palette.white};
`

export const Navigation: React.FC<NavigationProps> = ({ groups }) => {
  const { tp } = useTranslation()

  const mainGroup: INavLinkGroup = {
    links: [
      {
        name: tp.candidate.label({ count: 10 }),
        url: `/candidates`,
        key: '/candidates',
        isExpanded: true,
        links: [
          {
            name: tp.common.list(),
            url: `/candidates/list`,
            key: `/candidates/list`,
            icon: 'list',
          },
          {
            name: tp.common.table(),
            url: `/candidates/table`,
            key: `/candidates/table`,
            icon: 'table',
          },
        ],
      },
      {
        name: tp.job.label({ count: 10 }),
        url: `/jobs`,
        key: '/jobs',
        isExpanded: true,
        links: [
          {
            name: tp.common.list(),
            url: `/jobs/list`,
            key: `/jobs/list`,
            icon: 'list',
          },
        ],
      },
    ],
  }

  const onLinkClick: INavProps['onLinkClick'] = (ev, link) => {
    if (ev) {
      ev.preventDefault()
    }
    if (link) {
      navigate(link.url)
    }
  }

  return (
    <Location>
      {({ location }) => {
        // matches 1 or 2 segments of url as key
        const keyRegex = /^\/[a-z]+(?:\/[a-z]+)?/g
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
