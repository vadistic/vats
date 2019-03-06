import { css, Global } from '@emotion/core'
import { globalStyles, Theme } from '@vats/styling'
import React, { Suspense } from 'react'
import { LoadingSpinner } from '../loading'
import { Navigation } from '../navigation'

const layoutStyles = (theme: Theme) => css`
  min-height: 100vh;
  max-width: 100vw;

  display: grid;
  grid-template-columns: ${theme.sizes.ms} calc(100% - ${theme.sizes.ms});

  background-color: ${theme.palette.neutralLighterAlt};
`

export const Layout: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <div css={layoutStyles}>
      <Navigation />
      <Suspense fallback={<LoadingSpinner label="Loading view..." />}>{children}</Suspense>
    </div>
  </>
)
