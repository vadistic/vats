import { css, Global } from '@emotion/core'
import React, { Suspense } from 'react'

import { Navigation } from '..'
import { globalStyles, ITheme } from '../../styles'
import { Loading } from '../loading'

const layoutStyles = (theme: ITheme) => css`
  min-height: 100vh;
  max-width: 100vw;

  display: grid;
  grid-template-columns: ${theme.sizes.ms} calc(100% - ${theme.sizes.ms});

  background-color: ${theme.semanticColors.bodyBackground};
`

export const Layout: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <div css={layoutStyles}>
      <Navigation />
      <Suspense fallback={<Loading label="Loading view..." />}>{children}</Suspense>
    </div>
  </>
)
