import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import * as React from 'react'
import { Query, QueryResult } from 'react-apollo'

import { MarqueeSelection, Selection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'

import { ElementType } from '../../utils'
import {
  ApplicationsBoardQuery,
  ApplicationsBoardQueryVariables,
} from './generated/ApplicationsBoardQuery'

const ApplicationsBoardQuery = gql`
  query ApplicationsBoardQuery($first: Int!, $after: String) {
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

export type TApplicationBoardItem = NonNullable<ElementType<ApplicationsBoardQuery['applications']>>

interface IApplicationsBoardBaseProps {
  query: QueryResult<ApplicationsBoardQuery, ApplicationsBoardQueryVariables>
}

interface IApplicationsBoardBaseState {
  items: TApplicationBoardItem[]
  selectionDetails: string
}

export class ApplicationsBoardBase extends React.Component<
  IApplicationsBoardBaseProps,
  IApplicationsBoardBaseState
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

export interface IApplicationsBoardProps extends RouteComponentProps {}

export const ApplicationsBoard: React.SFC<IApplicationsBoardProps> = props => (
  <Query<ApplicationsBoardQuery, ApplicationsBoardQueryVariables>
    query={ApplicationsBoardQuery}
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
          <ApplicationsBoardBase query={query} />
        </div>
      )
    }}
  </Query>
)