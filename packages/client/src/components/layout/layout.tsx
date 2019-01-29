import { css, Global } from '@emotion/core'
import * as React from 'react'

import { Navigation } from '..'
import { globalStyles, ITheme } from '../../styles'

const layoutStyles = (theme: ITheme) => css`
  min-height: 100vh;
  max-width: 100vw;

  display: grid;
  grid-template-columns: 180px calc(100% - 180px);
`

export const Layout: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <div css={layoutStyles}>
      <div>
        <code>Logo</code>
        <Navigation />
      </div>
      {children}
    </div>
  </>
)
