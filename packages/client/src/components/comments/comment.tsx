import { css } from '@emotion/core'
import {
  ActionButton,
  ActivityItem,
  IActivityItemProps,
  IGroupHeaderProps,
  IPersonaSharedProps,
  IRenderFunction,
  IStyle,
} from 'office-ui-fabric-react'
import React from 'react'
import { useTranslation } from '../../i18n'
import { useTheme } from '../../styles'
import { sentenceCase } from '../../utils'
import { DisplayDateTime } from '../datetime'
import { Link } from '../link'
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

export interface ICommentProps {
  comment: CommentValue
  replies: CommentValue[]
  groupHeaderProps: IGroupHeaderProps
}

interface IStyles {
  [index: string]: IStyle
}

export const ParentComment: React.FC<ICommentProps> = ({ comment, replies }) => {
  const theme = useTheme()

  const commentStyles: IStyles = {
    root: {
      paddingTop: theme.spacing.m,
      paddingBottom: theme.spacing.m,
    },
  }

  const authorName = getAuthorName(comment)
  const authorPersonaProps = getPersonaProps(comment)

  const personasProps: IPersonaSharedProps[] = [authorPersonaProps]

  const activityDescription = (
    <span>
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

export interface ICommentFooterProps {
  groupFooterProps: IGroupHeaderProps
}

export const CommentFooter: React.FC<ICommentFooterProps> = ({ groupFooterProps }) => {
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

export interface IReplyProps {
  comment: CommentValue
}

export const Reply: React.FC<IReplyProps> = ({ comment }) => {
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
