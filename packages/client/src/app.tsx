import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { I18nextProvider } from 'react-i18next'
import { client } from './apollo'
import { CandidatesView, CandidateView, JobsView, JobView, Layout, Router } from './components'
import { i18next } from './i18n'
import { routes } from './routes'
import { theme, ThemeProvider } from './styles'
import { StateInspector } from './utils'
import { DevView } from './views'

export class App extends React.Component {
  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <I18nextProvider i18n={i18next}>
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
            </I18nextProvider>
          </ApolloHooksProvider>
        </ApolloProvider>
      </>
    )
  }
}

export default App
