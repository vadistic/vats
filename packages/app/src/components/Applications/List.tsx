import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import * as R from 'ramda'
import * as React from 'react'
import { Query, QueryResult } from 'react-apollo'

import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone'
import { List } from 'office-ui-fabric-react/lib/List'
import { MarqueeSelection, Selection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'

import { ElementType } from '../../utils'
import {
  ApplicationsListQuery,
  ApplicationsListQueryVariables,
} from './generated/ApplicationsListQuery'

const ApplicationsListQuery = gql`
  query ApplicationsListQuery(where: {}) {
    applications(first: $first, after: $after) {
      id
      updatedAt
      job {
        id
        name
        department
        type
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

  public state = {
    selectionDetails: '',
    items: [],
  }

  public render() {
    return (
      <FocusZone>
        <MarqueeSelection selection={this._selection}>
          <List items={this.state.items} />
        </MarqueeSelection>
      </FocusZone>
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
