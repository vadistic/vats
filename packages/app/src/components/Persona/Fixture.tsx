import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'

import { PersonaCandidate } from './Candidate'
import { PersonaFixtureQuery } from './generated/PersonaFixtureQuery'

import { PersonaFixtureQuery as personaFixtureQuery } from './Persona.graphql'

export const PersonaFixture: React.SFC<any> = props => (
  <Query<PersonaFixtureQuery> query={personaFixtureQuery}>
    {({ loading, error, data }) => {
      if (error) {
        return <p>{error.message}</p>
      }
      if (loading) {
        return 'Loading...'
      }
      if (data && data.candidates) {
        return (
          <>
            {data.candidates.map(
              candidate =>
                candidate && (
                  <>
                    <PersonaCandidate
                      key={candidate.id}
                      candidate={candidate}
                      size={PersonaSize.size24}
                    />
                    <PersonaCandidate
                      key={candidate.id}
                      candidate={candidate}
                      size={PersonaSize.size32}
                    />
                    <PersonaCandidate
                      key={candidate.id}
                      candidate={candidate}
                      size={PersonaSize.size48}
                    />
                    <PersonaCandidate
                      key={candidate.id}
                      candidate={candidate}
                      size={PersonaSize.size72}
                    />
                    <PersonaCandidate
                      key={candidate.id}
                      candidate={candidate}
                      size={PersonaSize.size100}
                    />
                  </>
                )
            )}
          </>
        )
      }

      return null
    }}
  </Query>
)
