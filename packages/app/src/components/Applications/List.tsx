import { Link, RouteComponentProps, WindowLocation } from '@reach/router'
import * as R from 'ramda'
import * as React from 'react'
import { Query, QueryResult } from 'react-apollo'

import { FocusZone, FocusZoneTabbableElements } from 'office-ui-fabric-react/lib/FocusZone'
import { List } from 'office-ui-fabric-react/lib/List'
import { MarqueeSelection, Selection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'

import { Card, Grid, PersonaCandidate } from '..'
import { ElementType, NonNullArray, qParse, qStringify } from '../../utils'
import {
  ApplicationsListQuery,
  ApplicationsListQueryVariables,
} from './generated/ApplicationsListQuery'
import { applicationsListQuery } from './graphql'

export type TApplicationListItem = NonNullable<ElementType<ApplicationsListQuery['applications']>>

export interface IApplicationsListBaseProps {
  query: QueryResult<ApplicationsListQuery, ApplicationsListQueryVariables>
}

export interface IApplicationsListBaseState {
  items: NonNullArray<TApplicationListItem[]>
  selectionDetails: string
}

export class ApplicationsListBase extends React.Component<
  IApplicationsListBaseProps,
  IApplicationsListBaseState
> {
  private _selection: Selection

  public state = {
    selectionDetails: '',
    items: this.props.query!.data!.applications as NonNullArray<TApplicationListItem[]>,
  }

  private _onRenderCell = (item: TApplicationListItem) => (
    <Link to="" state={{ candidateId: item.candidate.id }}>
      <Card candidate={item.candidate} />
    </Link>
  )

  public render() {
    return (
      <FocusZone handleTabKey={FocusZoneTabbableElements.all}>
        <MarqueeSelection selection={this._selection}>
          <List items={this.state.items} onRenderCell={this._onRenderCell} />
        </MarqueeSelection>
      </FocusZone>
    )
  }
}

export interface IApplicationsListTemplateProps {
  list: JSX.Element
  candidate: JSX.Element
}

export const ApplicationsListTemplate: React.SFC<IApplicationsListTemplateProps> = ({
  list,
  candidate,
}) => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item gridColumn={['1 / 4']}>{list}</Grid.Item>
      <Grid.Item gridColumn={['4 / 12']}>{candidate}</Grid.Item>
    </Grid.Container>
  </Grid.Section>
)

export interface IApplicationsListProps extends RouteComponentProps {}

export interface IApplicationsListState {
  jobIds: string[]
  stageIds: string[]
  candidateId: string
}

export class ApplicationsList extends React.Component<
  IApplicationsListProps,
  IApplicationsListState
> {
  private _uriQueries = qParse(this.props.location!.search)

  private _getLocation = () => {
    // TODO: Query for user preferences or last active view
    return {
      jobIds: this._uriQueries.jobIds || this.props.location!.state.jobIds || [],
      stageIds: this._uriQueries.stageIds || this.props.location!.state.stageIds || [],
      candidateId: this._uriQueries.candidateId || this.props.location!.state.candidateId || '',
    }
  }

  private _getQueryVariables = () => ({
    jobIds: this.state.jobIds,
    stageIds: this.state.stageIds,
  })

  public state = this._getLocation()

  // TODO: maybe shorten it?
  public getUri = () => qStringify(this.state)

  public render() {
    return (
      <Query<ApplicationsListQuery, ApplicationsListQueryVariables>
        query={applicationsListQuery}
        fetchPolicy={'cache-first'}
        variables={this._getQueryVariables()}
      >
        {query => {
          console.log('query data', query.data)
          console.log('state', this.state)

          if (query.error) {
            return (
              <MessageBar messageBarType={MessageBarType.error} isMultiline={true}>
                <h3>Error</h3>
                <p>{query.error.message}</p>
              </MessageBar>
            )
          }

          if (query.loading) {
            return <h3>Loading shimmer and stuff</h3>
          }

          return (
            <ApplicationsListTemplate
              list={<ApplicationsListBase query={query} />}
              candidate={<h3>{this._getLocation().candidateId}</h3>}
            />
          )
        }}
      </Query>
    )
  }
}
