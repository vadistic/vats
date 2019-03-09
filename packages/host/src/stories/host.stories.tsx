import { storiesOf } from '@storybook/react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'
import React, { Suspense, useState } from 'react'
import { createHost, HostProvider } from '../context'
import { useHostQuery } from '../query'
import { ApolloContext } from '../react-apollo'

export const CandidateFragment = gql`
  fragment Candidate on Candidate {
    id
    createdAt
    updatedAt
    firstName
    lastName
    company
    headline
    position
  }
`

export const CANDIDATES_QUERY = gql`
  query CandidatesQuery($where: CandidateWhereInput, $first: Int) {
    candidates(where: $where, first: $first) {
      phones
      emails
      links
      resumesString
      coverLettersString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

const initState = {
  local: 1,
}

const candidateHost = createHost<typeof initState, any>({
  initState,
  graphql: {
    query: CANDIDATES_QUERY,
  },
})

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: process.env.STORYBOOK_GRAPHQL_ENDPOINT,
})

export const apolloClientOptions = {
  connectToDevTools: true,
  link: ApolloLink.from([httpLink]),
  cache,
}

export const client = new ApolloClient(apolloClientOptions)

const FixtureWrapper: React.FC = ({ children }) => {
  return (
    <ApolloContext.Provider value={client}>
      <HostProvider host={candidateHost}>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </HostProvider>
    </ApolloContext.Provider>
  )
}

const stories = storiesOf('host', module)

stories.add('local state', () => (
  <FixtureWrapper>
    <LocalState />
  </FixtureWrapper>
))
const LocalState: React.FC = () => {
  const {
    state,
    status,
    data,
    dispatchActions: { updateState, updateVariables },
  } = useHostQuery(candidateHost, {
    variables: {},
  })

  const localAction = () => updateState(s => s.local++)

  return (
    <div>
      <button
        onClick={() => {
          localAction()
        }}
        type="button"
      >
        Increment {state.local}
      </button>
    </div>
  )
}

stories.add('query', () => (
  <FixtureWrapper>
    <Query />
  </FixtureWrapper>
))
const Query: React.FC = () => {
  const {
    state,
    status,
    data,
    dispatchActions: { updateState, updateVariables },
  } = useHostQuery(candidateHost, {
    variables: {},
  })

  const [field, setField] = useState('10')

  const variableChange = () =>
    updateVariables(v => {
      v.first = +field
    })

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 100,
          height: 200,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <input
            type="text"
            value={field}
            onChange={e => setField(e.target.value)}
            style={{ width: '100%' }}
          />
          <button onClick={variableChange} type="button">
            fetch No results
          </button>
        </div>
      </div>

      <p>STATUS: {status}</p>

      <h3>
        {status === 'READY' &&
          (data && data.candidates ? data.candidates.length : 'should not happen') + 'results'}
      </h3>

      <pre>{status === 'READY' && JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
