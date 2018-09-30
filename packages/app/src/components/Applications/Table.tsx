import { RouteComponentProps } from '@reach/router'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import * as R from 'ramda'
import * as React from 'react'
import { Query, QueryResult } from 'react-apollo'

import { Button } from 'office-ui-fabric-react/lib/Button'
import {
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
} from 'office-ui-fabric-react/lib/DetailsList'
import { MarqueeSelection, Selection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'
import { ShimmeredDetailsList } from 'office-ui-fabric-react/lib/ShimmeredDetailsList'

import { ScrollSensor } from '..'
import { ElementType, NonNullArray } from '../../utils'
import {
  ApplicationsTableQuery,
  ApplicationsTableQueryVariables,
} from './generated/ApplicationsTableQuery'

import { applicationsTableQuery } from './graphql'

export type TApplicationTableItem = NonNullable<ElementType<ApplicationsTableQuery['applications']>>

interface IApplicationsTableBaseProps {
  query: QueryResult<ApplicationsTableQuery, ApplicationsTableQueryVariables>
}

interface IApplicationsTableBaseState {
  items: TApplicationTableItem[]
  columns: IColumn[]
  selectionDetails: string
  isModalSelection: boolean
  isCompactMode: boolean
  hasFetchedAll: boolean
}

export class ApplicationsTableBase extends React.Component<
  IApplicationsTableBaseProps,
  IApplicationsTableBaseState
> {
  public static getDerivedStateFromProps(nextProps: IApplicationsTableBaseProps, prevState) {
    if (
      R.pathOr([], ['query', 'data', 'applications'], nextProps).length > prevState.items.length
    ) {
      const items = nextProps!.query!.data!.applications.filter(
        val => val !== null
      ) as NonNullArray<ApplicationsTableQuery['applications']>
      return {
        items,
      }
    } else {
      return null
    }
  }

  private _getColumns = (props): IColumn[] => {
    return [
      {
        key: 'column1',
        name: 'No',
        ariaLabel: 'Index Column',
        iconName: 'Pin',
        isIconOnly: true,
        fieldName: 'name',
        minWidth: 16,
        maxWidth: 16,
        onColumnClick: this.onColumnClick,
        onRender: (item: TApplicationTableItem, index: number) => {
          return <span>{index}</span>
        },
      },
      {
        key: 'column2',
        name: 'Name',
        minWidth: 150,
        maxWidth: 250,
        isRowHeader: true,
        isResizable: true,
        isSorted: false,
        isSortedDescending: false,
        isFiltered: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onColumnClick: this.onColumnClick,
        onRender: ({ candidate }: TApplicationTableItem, index: number) => (
          <span>
            {candidate.firstName} {candidate.lastName}
          </span>
        ),
        isPadded: true,
      },
      {
        key: 'column4',
        name: 'Date Modified',
        fieldName: 'dateModifiedValue',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        onColumnClick: this.onColumnClick,
        data: 'number',
        onRender: (item: TApplicationTableItem) => {
          return <span>{item.updatedAt}</span>
        },
        isPadded: true,
      },
    ]
  }

  public state = {
    items: [],
    columns: this._getColumns(this.props),
    selectionDetails: '',
    isModalSelection: false,
    isCompactMode: false,
    hasFetchedAll: false,
  }

  private _selection: Selection

  public loadMore = () => {
    const lastIndex = this.state.items.length - 1

    if (
      this.props.query.data &&
      this.props.query.data.applicationsConnection &&
      this.state.items.length < this.props.query.data.applicationsConnection.aggregate.count &&
      this.props.query.networkStatus !== NetworkStatus.fetchMore
    ) {
      this.props.query.fetchMore({
        // TODO: fix typings & define some utils typeguards
        variables: { first: 25, after: (this.state.items[lastIndex] as TApplicationTableItem).id },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return {
            ...previousResult,
            applications: [...previousResult.applications, ...fetchMoreResult.applications],
          }
        },
      })
    }
  }

  public onColumnClick = e => {
    console.log('column clicked', e)
  }

  public openPreview = e => {
    console.log('Previev invoked', e)
  }

  public render() {
    const { items, isModalSelection, isCompactMode, columns } = this.state

    return (
      <MarqueeSelection selection={this._selection}>
        <ShimmeredDetailsList
          items={items}
          compact={isCompactMode}
          columns={columns}
          selectionMode={isModalSelection ? SelectionMode.multiple : SelectionMode.none}
          setKey="id"
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          selection={this._selection}
          selectionPreservedOnEmptyClick={true}
          onItemInvoked={this.openPreview}
          enterModalSelectionOnTouch={true}
          enableShimmer={this.props.query.loading}
        />
        <Button onClick={this.loadMore}>Fetch more</Button>
        <ScrollSensor onTrigger={this.loadMore} edge="bottom" offsetPx={250} rate={1000} />
      </MarqueeSelection>
    )
  }
}

export interface IApplicationsTableProps extends RouteComponentProps {}

export const ApplicationsTable: React.SFC<IApplicationsTableProps> = props => (
  <Query<ApplicationsTableQuery, ApplicationsTableQueryVariables>
    query={applicationsTableQuery}
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
          <ApplicationsTableBase query={query} />
        </div>
      )
    }}
  </Query>
)
