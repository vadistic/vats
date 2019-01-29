import { css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Fabric, getTheme } from 'office-ui-fabric-react'
import React, { Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { client } from '../apollo'

export const AppWrapper: React.FC = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <ThemeProvider theme={getTheme()}>
            <Fabric>{children}</Fabric>
          </ThemeProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    </>
  )
}

const componentWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 80vh;
`

export const ComponentWrapper: React.FC = ({ children }) => (
  <div css={componentWrapperStyles}>
    <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>
  </div>
)

export const TestWrapper: React.FC = ({ children }) => (
  <AppWrapper>
    <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>
  </AppWrapper>
)
