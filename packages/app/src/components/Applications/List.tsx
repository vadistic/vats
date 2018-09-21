import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import * as R from 'ramda'
import * as React from 'react'
import { Query, QueryResult } from 'react-apollo'

import { MarqueeSelection, Selection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'

import { ElementType } from '../../utils'
import {
  ApplicationsListQuery,
  ApplicationsListQueryVariables,
} from './generated/ApplicationsListQuery'

const ApplicationsListQuery = gql`
  query ApplicationsListQuery($first: Int!, $after: String) {
    applications(first: $first, after: $after) {
      id
      updatedAt
      job {
        id
        name
        department
        status
      }
      candidate {
        id
        firstName
        lastName
        tags {
          id
          label
        }
      }
      stage {
        id
        name
        type
      }
    }
    applicationsConnection {
      aggregate {
        count
      }
    }
  }
`

export type TApplicationListItem = NonNullable<ElementType<ApplicationsListQuery['applications']>>

interface IApplicationsListBaseProps {
  query: QueryResult<ApplicationsListQuery, ApplicationsListQueryVariables>
}

interface IApplicationsListBaseState {
  items: TApplicationListItem[]

  selectionDetails: string
}

export class ApplicationsListBase extends React.Component<
  IApplicationsListBaseProps,
  IApplicationsListBaseState
> {
  private _selection: Selection

  public render() {
    return (
      <MarqueeSelection selection={this._selection}>
        <p>A</p>
      </MarqueeSelection>
    )
  }
}

export interface IApplicationsListProps extends RouteComponentProps {}

export const ApplicationsList: React.SFC<IApplicationsListProps> = props => (
  <Query<ApplicationsListQuery, ApplicationsListQueryVariables>
    query={ApplicationsListQuery}
    fetchPolicy={'cache-first'}
    variables={{ first: 50 }}
  >
    {query => {
      if (query.error) {
        return (
          <MessageBar messageBarType={MessageBarType.error} isMultiline={true}>
            <h3>Error</h3>
            <p>{query.error.message}</p>
          </MessageBar>
        )
      }

      return (
        <div>
          <ApplicationsListBase query={query} />
        </div>
      )
    }}
  </Query>
)
