import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'
import * as React from 'react'
import { Query } from 'react-apollo'

interface IApplicationsListProps extends RouteComponentProps {}

const APPLICATIONS = gql`
  query applications {
    applications {
      id
    }
  }
`

export const List: React.SFC<IApplicationsListProps> = props => {
  return (
    <Query query={APPLICATIONS} fetchPolicy={'cache-first'}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>
        }
        if (error) {
          return (
            <MessageBar messageBarType={MessageBarType.error} isMultiline={true}>
              <h3>Error</h3>
              <p>{error}</p>
            </MessageBar>
          )
        }

        return <div>{data.stringify()}</div>
      }}
    </Query>
  )
}
