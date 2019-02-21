import { IGroup } from 'office-ui-fabric-react'
import { Omit } from '../../utils'
import { CommentValue } from './comments'

export interface IGroupCommentsOptions {
  shouldGroupCollapse?: (props: {
    parent: CommentValue
    replies: CommentValue[]
    groupIndex: number
  }) => boolean
}

export interface IGroupComments {
  groups: IGroup[]
  replies: CommentValue[]
  parents: CommentValue[]
}

interface IGroupHash {
  [index: string]: {
    parent: CommentValue
    replies: CommentValue[]
  }
}

export const groupComments = (
  comments: CommentValue[],
  options?: IGroupCommentsOptions,
): IGroupComments => {
  // create hash
  const groupHash: IGroupHash = comments.reduce(
    (acc, comment) => {
      if (!comment.parent) {
        acc[comment.id] = {
          parent: comment,
          replies: [],
        }
      } else {
        // only needed temporary because seeding script could possibly deep nested
        if (Object.keys(acc).includes(comment.parent.id)) {
          acc[comment.parent.id].replies.push(comment)
        }
      }

      return acc
    },
    ({} as unknown) as IGroupHash,
  )

  const init: IGroupComments = {
    groups: [],
    replies: [],
    parents: [],
  }

  return (
    Object.values(groupHash)
      // sort parents
      .sort(
        (a, b) =>
          new Date(b.parent.createdAt).getMilliseconds() -
          new Date(a.parent.createdAt).getMilliseconds(),
      )
      // sort replies
      .map(({ parent, replies }) => ({
        parent,
        replies: replies.sort(
          (a, b) =>
            new Date(b.createdAt).getMilliseconds() - new Date(a.createdAt).getMilliseconds(),
        ),
      }))
      // reduce to result
      .reduce((acc, { parent, replies }) => {
        const group: IGroup = {
          key: parent.id,
          name: 'Comment:' + parent.id,
          startIndex: acc.replies.length,
          count: replies.length,
          level: 1,
          hasMoreData: false,
          isCollapsed:
            options && options.shouldGroupCollapse
              ? options.shouldGroupCollapse({ parent, replies, groupIndex: acc.groups.length })
              : false,
        }

        acc.groups.push(group)
        acc.replies.push(...replies)
        acc.parents.push(parent)

        return acc
      }, init)
  )
}
