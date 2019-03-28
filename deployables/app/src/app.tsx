import { I18nProvider } from '@vats/i18n'
import { ApolloContext } from '@vats/store'
import { theme, ThemeProvider } from '@vats/styling'
import { Fabric } from 'office-ui-fabric-react'
import React, { lazy, Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { client } from './apollo'
import { Layout, Router } from './components'

const DevTools = lazy(() =>
  process.env.NODE_ENV === 'production'
    ? Promise.resolve({ default: () => null })
    : // tslint:disable-next-line: no-implicit-dependencies
      (import('mobx-react-devtools') as any),
)

const LazyJobView = lazy(() => import(/* webpackChunkName: "job-view" */ './modules/job/view'))
const LazyJobsView = lazy(() => import(/* webpackChunkName: "jobs-view" */ './modules/jobs/view'))
const LazyCandidateView = lazy(() =>
  import(/* webpackChunkName: "candidate-view" */ './modules/candidate/view'),
)
const LazyCandidatesView = lazy(() =>
  import(/* webpackChunkName: "candidates-view" */ './modules/candidates/view'),
)
const LazyApplicationsView = lazy(() =>
  import(/* webpackChunkName: "applications-view" */ './modules/applications/view'),
)

export const App: React.FC = () => {
  return (
    <ApolloContext.Provider value={client}>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <I18nProvider>
            <ThemeProvider theme={theme}>
              <Fabric theme={theme}>
                <Layout>
                  <Suspense fallback={<p>Lazyloading view</p>}>
                    <Router primary={true}>
                      <LazyJobView path={`job/:id`} />
                      <LazyJobsView path={`jobs/*`} />
                      <LazyCandidateView path={`candidate/:id`} />
                      <LazyCandidatesView path={`candidates/*`} />
                      <LazyApplicationsView path={`applications/*`} />
                    </Router>
                  </Suspense>
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

// tslint:disable-next-line: no-implicit-dependencies
import { hot } from 'react-hot-loader'

const MaybeHotApp = process.env.NODE_ENV === 'development' ? hot(module)(App) : App

export default MaybeHotApp
