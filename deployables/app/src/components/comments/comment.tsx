import { css } from '@emotion/core'
import { useTranslation } from '@vats/i18n'
import { FabricStyles, useTheme } from '@vats/styling'
import { sentenceCase } from '@vats/utils'
import {
  ActionButton,
  ActivityItem,
  IActivityItemProps,
  IGroupHeaderProps,
  IPersonaSharedProps,
  IRenderFunction,
} from 'office-ui-fabric-react'
import React from 'react'
import { DisplayDateTime } from '../datetime'
import { Link } from '../router'
import { CommentValue } from './comments'

const renderTimeStamp: IRenderFunction<IActivityItemProps> = props => {
  if (!props) {
    return null
  }

  const { timeStamp } = props

  return <DisplayDateTime relative={false} isoDate={timeStamp as string} />
}

const getAuthorName = (comment: CommentValue) =>
  [comment.createdBy.firstName, comment.createdBy.lastName].join(' ')

const getPersonaProps = (comment: CommentValue) => ({
  imageUrl: comment.createdBy.avatar ? comment.createdBy.avatar.url : undefined,
  imageInitials: comment.createdBy.firstName[0] + comment.createdBy.lastName[0],
  title: getAuthorName(comment),
})

export interface CommentProps {
  comment: CommentValue
  replies: CommentValue[]
  groupHeaderProps: IGroupHeaderProps
}

export const ParentComment: React.FC<CommentProps> = ({ comment, replies, groupHeaderProps }) => {
  const theme = useTheme()

  const isFirst = groupHeaderProps.groupIndex === 0
  const isLast =
    !!groupHeaderProps.groups && groupHeaderProps.groups.length - 1 === groupHeaderProps.groupIndex

  //
  const commentStyles: FabricStyles = {
    root: {
      paddingTop: !isFirst ? theme.spacing.m : 'inherit',
      paddingBottom: !isLast ? theme.spacing.m : 'inherit',
    },
  }

  const authorName = getAuthorName(comment)
  const authorPersonaProps = getPersonaProps(comment)

  const personasProps: IPersonaSharedProps[] = [authorPersonaProps]

  const activityDescription = (
    <span>
      {/* TODO: via router config */}
      <Link to={`/user/${comment.createdBy.id}`}>{authorName}</Link> commented
    </span>
  )

  const testContent = (
    <>
      <p>{comment.content}</p>
      {replies && replies.map(reply => <p key={reply.id}>{reply.content}</p>)}
    </>
  )

  return (
    <ActivityItem
      styles={{ root: commentStyles.root }}
      key={comment.id}
      activityPersonas={personasProps}
      activityDescription={activityDescription}
      comments={testContent}
      timeStamp={comment.createdAt}
      onRenderTimeStamp={renderTimeStamp}
    />
  )
}

export interface CommentFooterProps {
  groupFooterProps: IGroupHeaderProps
}

export const CommentFooter: React.FC<CommentFooterProps> = ({ groupFooterProps }) => {
  const theme = useTheme()
  const { tp } = useTranslation()

  const { onToggleCollapse, group, expandButtonProps } = groupFooterProps

  const isCollapsed = groupFooterProps.group && groupFooterProps.group.isCollapsed

  const footerStyles = {
    root: css`
      margin-left: ${isCollapsed ? theme.spacing.l1 : theme.spacing.l2};
    `,
    button: css`
      ${theme.fonts.small as any}
    `,
  }

  const handleToggleCollapse = (ev: React.MouseEvent<any>): void => {
    if (onToggleCollapse && group) {
      onToggleCollapse(group)
    }

    ev.stopPropagation()
    ev.preventDefault()
  }

  const renderCollapseButton = () => {
    if (group && group.count > 0) {
      const collapseButtonText = sentenceCase(
        `${isCollapsed ? tp.action.show() : tp.action.hide()} ${group.count} ${tp.candidate.reply({
          count: group.count,
        })}`,
      )

      return (
        <ActionButton
          {...expandButtonProps}
          onClick={handleToggleCollapse}
          css={footerStyles.button}
        >
          {collapseButtonText}
        </ActionButton>
      )
    }
  }

  const handleToggleReply = (): void => {
    /* noop */
  }

  const renderReplyButton = () => {
    if (group && group.count > 0) {
      const replyButtonText = tp.action.reply()

      return (
        <ActionButton {...expandButtonProps} onClick={handleToggleReply} css={footerStyles.button}>
          {replyButtonText}
        </ActionButton>
      )
    }
  }

  return (
    <div css={footerStyles.root}>
      {renderCollapseButton()}
      {renderReplyButton()}
    </div>
  )
}

export interface ReplyProps {
  comment: CommentValue
}

export const Reply: React.FC<ReplyProps> = ({ comment }) => {
  const theme = useTheme()

  const replyStyles = css`
    margin-left: ${theme.spacing.l2};
    margin-top: ${theme.spacing.s1};
    margin-bottom: ${theme.spacing.s1};
  `

  const authorName = getAuthorName(comment)

  const activityDescription = (
    <span>
      <Link to={`/user/${comment.createdBy.id}`}>{authorName}</Link> replied
    </span>
  )

  const testContent = (
    <>
      <p>{comment.content}</p>
    </>
  )

  return (
    <ActivityItem
      css={replyStyles}
      key={comment.id}
      activityPersonas={undefined}
      activityDescription={activityDescription}
      comments={testContent}
      timeStamp={comment.createdAt}
      onRenderTimeStamp={renderTimeStamp}
    />
  )
}
