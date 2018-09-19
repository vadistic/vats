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
import { ApplicationsQuery } from './generated/ApplicationsQuery'
import { MarqueeSelection, Selection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import {
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode,
  IColumn,
} from 'office-ui-fabric-react/lib/DetailsList'
import { NonNullArray, ElementType } from '../../utils'
const GET_APPLICATIONS = gql`
  query ApplicationsQuery {
    applications {
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

interface IApplicationsBaseProps {
  data: ApplicationsQuery
}

export class ApplicationsListBase extends React.Component<IApplicationsBaseProps, {}> {
  private _getItems = (): TApplicationItem[] => {
    const { applications } = this.props.data

    return applications.filter(val => val !== null) as NonNullArray<typeof applications>
  }

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

  state = {
    selection: new Selection(),
    items: this._getItems(),
    columns: this._getColumns(),
    selectionDetails: '',
    isModalSelection: false,
    isCompactMode: false,
  }

  public render() {
    const { selection, items, isModalSelection, isCompactMode, columns } = this.state
    return (
      <MarqueeSelection selection={selection}>
        <DetailsList
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
        />
      </MarqueeSelection>
    )
  }
}

export interface IApplicationsListProps extends RouteComponentProps {}

export const ApplicationsList: React.SFC<IApplicationsListProps> = props => (
  <Query<ApplicationsQuery> query={GET_APPLICATIONS} fetchPolicy={'cache-first'}>
    {({ data, error, loading }) => {
      if (error) {
        return (
          <MessageBar messageBarType={MessageBarType.error} isMultiline={true}>
            <h3>Error</h3>
            <p>{error.message}</p>
          </MessageBar>
        )
      }

      if (loading) {
        return <p>Loading...</p>
      }

      if (data) {
        return (
          <div>
            <ApplicationsListBase data={data} />
          </div>
        )
      }
      return <p>Super Error</p>
    }}
  </Query>
)
