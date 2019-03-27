import { I18nProvider } from '@vats/i18n'
import { ApolloContext } from '@vats/store'
import { theme, ThemeProvider } from '@vats/styling'
import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { client } from './apollo'
import { Layout, Router } from './components'
import { ApplicationsView, CandidatesView, CandidateView, JobsView, JobView } from './modules'

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
            <ThemeProvider theme={theme}>
              <Fabric theme={theme}>
                <Layout>
                  <Router>
                    <JobView path={`job/:id`} />
                    <JobsView path={`jobs/*`} />
                    <CandidateView path={`candidate/:id`} />
                    <CandidatesView path={`candidates/*`} />
                    <ApplicationsView path={`applications/*`} />
                  </Router>
                  <DevTools />
                </Layout>
              </Fabric>
            </ThemeProvider>
          </I18nProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    </ApolloContext.Provider>
  )
}

export default hot(module)(App)
