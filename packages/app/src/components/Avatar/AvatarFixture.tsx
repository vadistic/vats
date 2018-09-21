import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'

import { Avatar, candidateAvatarFragment } from './Avatar'
import { AvatarFixtureQuery } from './generated/AvatarFixtureQuery'

export const avatarFixtureQuery = gql`
  query AvatarFixtureQuery {
    candidates(first: 10) {
      id
      ...CandidateAvatarFragment
    }
  }
  ${candidateAvatarFragment}
`

export const AvatarFixture: React.SFC<any> = props => (
  <Query<AvatarFixtureQuery> query={avatarFixtureQuery}>
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
                    <Avatar key={candidate.id} candidate={candidate} size={PersonaSize.size24} />
                    <Avatar key={candidate.id} candidate={candidate} size={PersonaSize.size32} />
                    <Avatar key={candidate.id} candidate={candidate} size={PersonaSize.size48} />
                    <Avatar key={candidate.id} candidate={candidate} size={PersonaSize.size72} />
                    <Avatar key={candidate.id} candidate={candidate} size={PersonaSize.size100} />
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
