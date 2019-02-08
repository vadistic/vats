import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { client } from './apollo'
import { CandidatesView, CandidateView, JobsView, JobView, Layout, Router } from './components'
import { routes } from './routes'
import { theme } from './styles'
import { StateInspector } from './utils'
import { DevView } from './views'

export class App extends React.Component {
  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <StateInspector name="APP">
              <ThemeProvider theme={theme}>
                <Fabric>
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
          </ApolloHooksProvider>
        </ApolloProvider>
      </>
    )
  }
}

export default App
