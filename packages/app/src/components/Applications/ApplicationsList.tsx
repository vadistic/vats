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
const GET_APPLICATIONS = gql`
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
  }
`

export type TApplicationItem = NonNullable<ElementType<ApplicationsQuery['applications']>>

interface IApplicationsListBaseProps {
  query: QueryResult<ApplicationsQuery, ApplicationsQueryVariables>
}

interface IApplicationsListBaseState {}

export class ApplicationsListBase extends React.Component<
  IApplicationsListBaseProps,
  IApplicationsListBaseState
> {
  private _getColumns = (): IColumn[] => {
    return [
      {
        key: 'column1',
        name: 'File Type',
        headerClassName: 'DetailsListExample-header--FileIcon',
        className: 'DetailsListExample-cell--FileIcon',
        iconClassName: 'DetailsListExample-Header-FileTypeIcon',
        ariaLabel: 'Column operations for File type',
        iconName: 'Page',
        isIconOnly: true,
        fieldName: 'name',
        minWidth: 16,
        maxWidth: 16,
        onColumnClick: this.onColumnClick,
        onRender: (item: TApplicationItem) => {
          return <span>{item.job.name}</span>
        },
      },
      {
        key: 'column2',
        name: 'Name',
        fieldName: 'name',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onColumnClick: this.onColumnClick,
        data: 'string',
        isPadded: true,
      },
      {
        key: 'column3',
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

  public onColumnClick = e => {
    console.log('column clicked', e)
  }

  public openPreview = e => {
    console.log('Previev invoked', e)
  }

  public onRowDidMount = async (item: TApplicationItem, index: number) => {
    const rowsToVirtualize = 10

    const lastItemIndex = this.state.items.length

    if (index >= lastItemIndex - rowsToVirtualize) {
      console.log('fetching more after row', index)

      this.props.query.fetchMore({
        variables: { after: this.state.items[lastItemIndex] },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          return {
            ...previousResult,
            applications: [
              ...previousResult.applications,
              ...(fetchMoreResult ? fetchMoreResult.applications : []),
            ],
          }
        },
      })
    }
  }

  state = {
    data: this.props.query.data,
    selection: new Selection(),
    items: [],
    columns: this._getColumns(),
    selectionDetails: '',
    isModalSelection: false,
    isCompactMode: false,
  }

  static getDerivedStateFromProps(nextProps: IApplicationsListBaseProps, prevState) {
    // set items
    if (!nextProps.query.loading && nextProps.query.data && prevState.items.length === 0) {
      const items = nextProps.query.data.applications.filter(val => val !== null) as NonNullArray<
        ApplicationsQuery['applications']
      >
      return {
        items,
      }
    } else {
      return null
    }
  }

  public render() {
    const { selection, items, isModalSelection, isCompactMode, columns } = this.state

    return (
      <MarqueeSelection selection={selection}>
        <ShimmeredDetailsList
          items={items}
          compact={isCompactMode}
          columns={columns}
          selectionMode={isModalSelection ? SelectionMode.multiple : SelectionMode.none}
          setKey="id"
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          selection={selection}
          selectionPreservedOnEmptyClick={true}
          onItemInvoked={this.openPreview}
          enterModalSelectionOnTouch={true}
          enableShimmer={this.props.query.loading}
          onRowDidMount={this.onRowDidMount}
        />
      </MarqueeSelection>
    )
  }
}

export interface IApplicationsListProps extends RouteComponentProps {}

export const ApplicationsList: React.SFC<IApplicationsListProps> = props => (
  <Query<ApplicationsQuery, ApplicationsQueryVariables>
    query={GET_APPLICATIONS}
    fetchPolicy={'cache-first'}
    variables={{ first: 20 }}
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
