import { theme, ThemeProvider } from '@vats/styling'
import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloContext, client } from './apollo'
import { Layout, Router } from './components'
import { CandidatesView, CandidateView, JobsView, JobView } from './modules'
import { routes } from './routes'
import { StateInspector } from './utils'

import { I18nProvider } from '@vats/i18n'

// tslint:disable-next-line: no-implicit-dependencies
import DevTools, { configureDevtool } from 'mobx-react-devtools'
// tslint:disable-next-line: no-implicit-dependencies
import { hot } from 'react-hot-loader'

configureDevtool({
  logEnabled: true,
  updatesEnabled: true,
  graphEnabled: true,
})

export const App: React.FC = () => {
  return (
    <ApolloContext.Provider value={client}>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <I18nProvider>
            <StateInspector name="APP">
              <ThemeProvider theme={theme}>
                <Fabric theme={theme}>
                  <Layout>
                    <Router>
                      <JobView path={routes.job.path + '/:id'} />
                      <JobsView path={routes.jobs.path} />
                      <CandidateView path={routes.candidate.path + '/:id'} />
                      <CandidatesView path={routes.candidates.path} />
                    </Router>
                    <DevTools />
                  </Layout>
                </Fabric>
              </ThemeProvider>
            </StateInspector>
          </I18nProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    </ApolloContext.Provider>
  )
}

export default hot(module)(App)
