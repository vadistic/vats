import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'

import { PersonaCandidate } from './Candidate'
import { PersonaUser } from './User'

import { PersonaFixtureQuery } from './generated/PersonaFixtureQuery'

import { personaFixtureQuery } from './graphql'

export const PersonaFixture: React.SFC<any> = props => (
  <Query<PersonaFixtureQuery> query={personaFixtureQuery}>
    {({ loading, error, data }) => {
      if (error) {
        console.log(personaFixtureQuery)
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
                  <div key={candidate.id}>
                    <PersonaCandidate candidate={candidate} size={PersonaSize.size24} />
                    <PersonaCandidate candidate={candidate} size={PersonaSize.size32} />
                    <PersonaCandidate candidate={candidate} size={PersonaSize.size48} />
                    <PersonaCandidate candidate={candidate} size={PersonaSize.size72} />
                    <PersonaCandidate candidate={candidate} size={PersonaSize.size100} />
                  </div>
                )
            )}
            {data.users.map(
              user =>
                user && (
                  <div key={user.id}>
                    <PersonaUser user={user} size={PersonaSize.size24} />
                    <PersonaUser user={user} size={PersonaSize.size32} />
                    <PersonaUser user={user} size={PersonaSize.size48} />
                    <PersonaUser user={user} size={PersonaSize.size72} />
                    <PersonaUser user={user} size={PersonaSize.size100} />
                  </div>
                )
            )}
          </>
        )
      }

      return null
    }}
  </Query>
)
