import { Global } from '@emotion/core'
import * as React from 'react'

import { Navigation } from '..'
import { globalStyles } from '../../styles'

export const Layout: React.FC = ({ children }) => (
  <div>
    <Global styles={globalStyles} />
    <Navigation />
    {children}
  </div>
)
