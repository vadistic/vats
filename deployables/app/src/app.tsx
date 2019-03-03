import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { client } from './apollo'
import { CandidatesView, CandidateView, JobsView, JobView, Layout, Router } from './components'
import { routes } from './routes'
import { theme, ThemeProvider } from './styles'
import { StateInspector } from './utils'
import { DevView } from './views'

import { I18nProvider } from '@vats/i18n'

// tslint:disable-next-line: no-implicit-dependencies
import { hot } from 'react-hot-loader'

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <I18nProvider>
          <StateInspector name="APP">
            <ThemeProvider theme={theme}>
              <Fabric theme={theme}>
                <Layout>
                  <Router>
                    <DevView path={routes.dev.path} />
                    <JobView path={routes.job.path + '/:id'} />
                    <JobsView path={routes.jobs.path} />
                    <CandidateView path={routes.candidate.path + '/:id'} />
                    <CandidatesView path={routes.candidates.path} />
                  </Router>
                </Layout>
              </Fabric>
            </ThemeProvider>
          </StateInspector>
        </I18nProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default hot(module)(App)
