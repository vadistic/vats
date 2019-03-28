import { css } from '@emotion/core'
import { useTranslation } from '@vats/i18n'
import { useComputed } from '@vats/store'
import { Theme } from '@vats/styling'
import { filterNull, pathProxy, SortDirection } from '@vats/utils'
import {
  IColumn,
  IPersonaCoinProps,
  PersonaCoin,
  PersonaSize,
  TagItem,
} from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { CandidatesContext, CandidatesElement, CandidatesElementProps } from '../store'

export type ColumnsConfig = Array<{
  key: string
  minWidth: number
}>

const p = pathProxy<CandidatesElement>()

// basically a serialiser
export const getColumnsConfig = (columns: IColumn[]): ColumnsConfig =>
  columns.map(col => ({ key: col.key, minWidth: col.minWidth }))

export const useCandidatesTableColumns = () => {
  const { tp } = useTranslation()
  const store = useContext(CandidatesContext)

  const columns = useMemo(() => {
    const partial: Array<Partial<IColumn>> = [
      {
        name: tp.candidate.avatar(),
        key: p.avatar.PATH,
        onRender: candidate => <ColumnAvatar candidate={candidate} />,
        minWidth: 48,
      },
      {
        name: tp.candidate.firstName(),
        key: p.firstName.PATH,
        onColumnClick: columnSortAction,
      },
      {
        name: tp.candidate.lastName(),
        key: p.lastName.PATH,
        onColumnClick: columnSortAction,
      },
      {
        name: tp.candidate.company(),
        key: p.company.PATH,
        onColumnClick: columnSortAction,
      },
      {
        name: tp.candidate.position(),
        key: p.position.PATH,
        onColumnClick: columnSortAction,
      },
      {
        name: tp.candidate.headline(),
        key: p.headline.PATH,
        onColumnClick: columnSortAction,
      },
      {
        name: tp.candidate.tag({ count: 10 }),
        key: p.tags.PATH,
        isMultiline: true,
        minWidth: 160,
        onRender: candidate => <ColumnTags candidate={candidate} />,
      },
      {
        name: tp.candidate.applications({ count: 10 }),
        key: p.applications.PATH,
        isMultiline: true,
        minWidth: 160,
        onColumnClick: columnSortAction,

        onRender: candidate => <ColumnApplications candidate={candidate} />,
      },
    ]

    return partial.map(col => ({
      ...col,
      fieldName: col.onRender ? undefined : col.key,
      isResizable: true,
      minWidth: col.minWidth || 100,
    })) as IColumn[]
  }, [])

  const columnSortAction = store.action('column sort', (ev: any, column: IColumn) => {
    if (column.key !== store.state.sortBy) {
      store.state.sortBy = column.key
    } else {
      store.state.sortDirection = store.state.sortDirection * -1
    }
  })

  useMemo(() => {
    if (store.state.table.columns.length === 0) {
      store.run('inital columns', () => {
        store.state.table.columns = getColumnsConfig(columns)
      })
    }
  }, [])

  const computedColumns = useComputed('columns', () => {
    if (!store.state.table.columns) {
      return []
    }

    return store.state.table.columns.map(
      el =>
        ({
          ...columns.find(col => col.key === el.key),
          ...el,
          isSorted: store.state.sortBy === el.key,
          isSortedDescending: store.state.sortDirection === SortDirection.DESCENDING,
        } as IColumn),
    )
  })

  return computedColumns
}

const columnApplicationsStyles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  white-space: wrap;

  span {
    margin-bottom: ${theme.spacing.s1};
  }
`

const ColumnApplications: React.FC<CandidatesElementProps> = ({ candidate }) =>
  candidate.applications && (
    <div css={columnApplicationsStyles}>
      {candidate.applications.map(app => (
        <span key={app.id}>{`${app.job.name} (${app.stage.name})`}</span>
      ))}
    </div>
  )

const columnTagsStyles = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
`

const ColumnTags: React.FC<CandidatesElementProps> = ({ candidate }) =>
  candidate.tags && (
    <div css={columnTagsStyles}>
      {candidate.tags.map((tag, i) => (
        <TagItem
          index={i}
          key={tag.id}
          item={{ key: tag.id, name: tag.label }}
          styles={{ close: { display: 'none' } }}
        >
          {tag.label}
        </TagItem>
      ))}
    </div>
  )

const ColumnAvatar: React.FC<CandidatesElementProps> = ({ candidate }) => {
  const props: IPersonaCoinProps = candidate.avatar
    ? {
        imageUrl: candidate.avatar.url,
        imageAlt: [candidate.firstName, candidate.lastName].join(' '),
      }
    : {
        imageInitials: filterNull([candidate.firstName, candidate.lastName]).map(v => v[0]).join(''),
        imageAlt: [candidate.firstName, candidate.lastName].join(' '),
      }
  return <PersonaCoin {...props} size={PersonaSize.size40} />
}
