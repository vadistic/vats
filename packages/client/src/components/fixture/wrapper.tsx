import { getTheme } from '@uifabric/styling'
import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react'
import React, { Suspense } from 'react'

export const FixtureWrapper: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={getTheme()}>
      <Fabric className="fabric">
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </Fabric>
    </ThemeProvider>
  </>
)
