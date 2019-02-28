import { ElementType } from '@vats/utils'
import {
  GroupedList,
  IGroupedListProps,
  IGroupFooterProps,
  IGroupHeaderProps,
  IRenderFunction,
  SelectionMode,
} from 'office-ui-fabric-react'
import React, { Suspense, useMemo } from 'react'
import { CandidateCommentsQuery } from '../../generated/queries'
import { CommentFooter, ParentComment, Reply } from './comment'
import { groupComments, GroupCommentsOptions } from './group'

export type CommentValue = ElementType<
  NonNullable<NonNullable<CandidateCommentsQuery['candidate']>['comments']>
>

export interface CommentsProps {
  comments: CommentValue[]
  truncate?: number
}

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const shouldGroupCollapse: GroupCommentsOptions['shouldGroupCollapse'] = ({
    groupIndex: _groupIndex,
    replies: _replies,
  }) => _groupIndex >= 2 || _replies.length >= 5

  const { groups, replies, parents } = useMemo(
    () => groupComments(comments, { shouldGroupCollapse }),
    [comments],
  )

  const renderCell: IGroupedListProps['onRenderCell'] = (depth, comment: CommentValue) => (
    <Reply comment={comment} />
  )

  const renderHeader: IRenderFunction<IGroupHeaderProps> = props => {
    if (!props) {
      return null
    }
    const { groupIndex, group } = props

    if (groupIndex === undefined || !group) {
      return null
    }

    const _replies = replies.slice(group.startIndex, group.startIndex + group.count)

    return (
      <ParentComment comment={parents[groupIndex]} replies={_replies} groupHeaderProps={props} />
    )
  }

  const renderFooter: IRenderFunction<IGroupFooterProps> = props => {
    if (!props) {
      return null
    }

    return <CommentFooter groupFooterProps={props} />
  }

  return (
    <GroupedList
      selectionMode={SelectionMode.none}
      items={replies}
      groups={groups}
      onRenderCell={renderCell}
      usePageCache={false}
      groupProps={{
        showEmptyGroups: true,
        onRenderHeader: renderHeader,
        onRenderFooter: renderFooter,
      }}
    />
  )
}

export const suspendComments = (component: React.ComponentType<any>) => {
  const Component = component
  const SuspendedComment: React.FC = props => (
    // TODO: fallback skeleton
    <Suspense fallback={<p>Loading comments...</p>}>
      <Component {...props} />
    </Suspense>
  )

  return SuspendedComment
}
