import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

import { CandidateHoverCard } from './Candidate'
import { HoverCardFixtureQuery } from './generated/HoverCardFixtureQuery'

import * as hoverCardFixtureQuery from './Fixture.query.graphql'

export const HoverCardFixture: React.SFC<any> = props => (
  <Query<HoverCardFixtureQuery> query={hoverCardFixtureQuery}>
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
                    <CandidateHoverCard candidate={candidate}>
                      {candidate.firstName} {candidate.lastName}
                    </CandidateHoverCard>
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
