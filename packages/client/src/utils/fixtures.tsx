import { css } from '@emotion/core'
import { Fabric } from 'office-ui-fabric-react'
import React, { Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { client } from '../apollo'
import { Layout, LoadingSpinner } from '../components'
import { theme, ThemeProvider } from '../styles'

export const random = (max: number) => Math.round(Math.random() * max)

export const AppWrapper: React.FC = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <ThemeProvider theme={theme}>
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

  & > div {
    max-width: 100%;
  }

  /* for centering */
  min-height: 80vh;
`

export const ViewWrapper: React.FC = ({ children }) => <Layout>{children}</Layout>

export const ComponentWrapper: React.FC = ({ children }) => (
  <div css={componentWrapperStyles}>
    <Suspense fallback={<LoadingSpinner label="Fetching stuff..." />}>{children}</Suspense>
  </div>
)

export const TestWrapper: React.FC = ({ children }) => (
  <AppWrapper>
    <Suspense fallback={<p>fallback</p>}>{children}</Suspense>
  </AppWrapper>
)
