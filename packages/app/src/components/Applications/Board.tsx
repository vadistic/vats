import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import * as R from 'ramda'
import * as React from 'react'
import { Query } from 'react-apollo'

import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'

import { ElementType, filterNull, nonNullable, NonNullArray, qParse, qStringify } from '../../utils'
import { Card } from '../Card'
import { ApplicationsBoardTemplate } from './BoardTemplate'
import {
  ApplicationsBoardQuery,
  ApplicationsBoardQuery_applications,
  ApplicationsBoardQuery_jobs_workflow_stages,
  ApplicationsBoardQueryVariables,
} from './generated/ApplicationsBoardQuery'

import { DraggableContainer } from '../Draggable'
import { applicationsBoardQuery } from './graphql'

export type TApplicationBoardItem = ApplicationsBoardQuery_applications

export type TApplicationBoardStage = ApplicationsBoardQuery_jobs_workflow_stages

export interface IApplicationsBoardBaseProps {
  data: ApplicationsBoardQuery
  children: (lists: JSX.Element[]) => JSX.Element
}

export interface IApplicationsBoardBaseState {
  lists: {
    [stageId: string]: TApplicationBoardItem[]
  }
  stages: TApplicationBoardStage[]
}

export class ApplicationsBoardBase extends React.Component<
  IApplicationsBoardBaseProps,
  IApplicationsBoardBaseState
> {
  private _getLists = (items: ApplicationsBoardQuery['applications']) =>
    R.groupBy(item => item.stage.id, filterNull(items))

  private _getStages = (items: ApplicationsBoardQuery['jobs']) => {
    const stagesMap = filterNull(items).reduce(
      (acc, job) => R.assoc(job.workflow.id, job.workflow.stages, acc),
      {}
    )

    return Object.values(stagesMap).flat(1) as TApplicationBoardStage[]
  }

  public state = {
    lists: this._getLists(this.props.data.applications),
    stages: this._getStages(this.props.data.jobs),
  }

  private _onRenderCard = (item: TApplicationBoardItem, index?: number, isScrolling?: boolean) => (
    <Card application={item} />
  )

  public lists = Object.entries(this.state.lists).map(([stageId, items], i) => (
    <DraggableContainer items={items} onRenderCell={this._onRenderCard}>
      {({ list }) => list}
    </DraggableContainer>
  ))

  // DIAGNOSTIC TODO: DELETE
  public componentDidUpdate(prevProps) {
    Object.keys(this.props).forEach(key => {
      if (this.props[key] !== prevProps[key]) {
        console.log(key, 'changed from', prevProps[key], 'to', this.props[key])
      }
    })
  }

  public render() {
    return this.props.children(this.lists)
  }
}

export interface IApplicationsBoardProps extends RouteComponentProps {}

export class ApplicationsBoard extends React.Component<IApplicationsBoardProps> {
  private _uriQueries = qParse(this.props.location!.search)

  private _getLocation = () => {
    // TODO: Query for user preferences or last active view
    return {
      jobIds: this._uriQueries.jobIds || this.props.location!.state.jobIds || [],
      candidateId: this._uriQueries.candidateId || this.props.location!.state.candidateId || '',
    }
  }

  private _getQueryVariables = () => ({
    jobIds: this.state.jobIds,
  })

  public getUri = () => qStringify(this.state)

  public state = this._getLocation()

  public render() {
    return (
      <Query<ApplicationsBoardQuery, ApplicationsBoardQueryVariables>
        query={applicationsBoardQuery}
        fetchPolicy={'cache-first'}
        variables={this._getQueryVariables()}
      >
        {({ error, loading, data }) => {
          if (error) {
            return (
              <MessageBar messageBarType={MessageBarType.error} isMultiline={true}>
                <h3>Error</h3>
                <p>{error.message}</p>
              </MessageBar>
            )
          }

          if (loading) {
            return <h3>Loading shimmer and stuff</h3>
          }

          if (data !== undefined) {
            return (
              <div>
                <ApplicationsBoardBase data={data}>
                  {lists => <ApplicationsBoardTemplate lists={lists} />}
                </ApplicationsBoardBase>
              </div>
            )
          }

          return null
        }}
      </Query>
    )
  }
}
