import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'
import * as React from 'react'
import {
  Query,
  withApollo,
  WithApolloClient,
  graphql,
  QueryResult,
  OperationVariables,
} from 'react-apollo'
import { ApplicationsQuery, ApplicationsQueryVariables } from './generated/ApplicationsQuery'
import { MarqueeSelection, Selection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import { ShimmeredDetailsList } from 'office-ui-fabric-react/lib/ShimmeredDetailsList'

import {
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode,
  IColumn,
} from 'office-ui-fabric-react/lib/DetailsList'
import { NonNullArray, ElementType } from '../../utils'
import * as R from 'ramda'
import { NetworkStatus } from 'apollo-client'
import { Button } from 'office-ui-fabric-react/lib/Button'
import { ScrollSensor } from '..'

const ApplicationsQuery = gql`
  query ApplicationsQuery($first: Int!, $after: String) {
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

export type TApplicationItem = NonNullable<ElementType<ApplicationsQuery['applications']>>

interface IApplicationsListBaseProps {
  query: QueryResult<ApplicationsQuery, ApplicationsQueryVariables>
}

interface IApplicationsListBaseState {
  items: TApplicationItem[]
  columns: IColumn[]
  selectionDetails: string
  isModalSelection: boolean
  isCompactMode: boolean
  hasFetchedAll: boolean
}

export class ApplicationsListBase extends React.Component<
  IApplicationsListBaseProps,
  IApplicationsListBaseState
> {
  public getItems = props => {
    return props.query.data.applications.filter(val => val !== null) as NonNullArray<
      ApplicationsQuery['applications']
    >
  }

  public getColumns = (props): IColumn[] => {
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
        onRender: (item: TApplicationItem, index: number) => {
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
        onRender: ({ candidate }: TApplicationItem, index: number) => (
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
        onRender: (item: TApplicationItem) => {
          return <span>{item.updatedAt}</span>
        },
        isPadded: true,
      },
    ]
  }

  public state = {
    items: [],
    columns: this.getColumns(this.props),
    selectionDetails: '',
    isModalSelection: false,
    isCompactMode: false,
    hasFetchedAll: false,
  }

  private _selection: Selection

  public static getDerivedStateFromProps(nextProps: IApplicationsListBaseProps, prevState) {
    if (
      R.pathOr([], ['query', 'data', 'applications'], nextProps).length > prevState.items.length
    ) {
      const items = nextProps!.query!.data!.applications.filter(
        val => val !== null
      ) as NonNullArray<ApplicationsQuery['applications']>
      return {
        items,
      }
    } else {
      return null
    }
  }

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
        variables: { first: 25, after: (this.state.items[lastIndex] as TApplicationItem).id },
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

export interface IApplicationsListProps extends RouteComponentProps {}

export const ApplicationsList: React.SFC<IApplicationsListProps> = props => (
  <Query<ApplicationsQuery, ApplicationsQueryVariables>
    query={ApplicationsQuery}
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
