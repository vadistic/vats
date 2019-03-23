import { StringMap } from '@vats/utils'
import { IGroup } from 'office-ui-fabric-react'

export interface GroupItemPointer {
  index: number
  groupIndex: number
}

export const adjustGroups = (groups: IGroup[], from: GroupItemPointer, to: GroupItemPointer) => {
  const min = Math.min(from.groupIndex, to.groupIndex)
  const max = Math.max(from.groupIndex, to.groupIndex)

  if (to.groupIndex !== from.groupIndex) {
    groups[to.groupIndex].count = groups[to.groupIndex].count + 1
    groups[from.groupIndex].count = groups[from.groupIndex].count - 1

    groups.forEach((group, groupIndex) => {
      if (min < groupIndex && groupIndex <= max) {
        groups[groupIndex].startIndex += from.groupIndex < to.groupIndex ? -1 : 1
      }
    })
  }
}

export const getGroups = <T>(items: T[], groupBy: (item: T) => string | string[]) => {
  const groupMap: StringMap<T[]> = {}

  const push = (item: T, key: string) => {
    if (!groupMap[key]) {
      groupMap[key] = []
    }
    groupMap[key].push(item)
  }

  for (const item of items) {
    const key = groupBy(item)

    if (Array.isArray(key)) {
      key.forEach(k => {
        push(item, k)
      })
    } else {
      push(item, key)
    }
  }

  const groups = Object.entries(groupMap).reduce(
    (acc, [key, groupItems], i) => [
      ...acc,
      {
        key,
        name: key,
        startIndex:
          acc.length === 0 ? 0 : acc[acc.length - 1].startIndex + acc[acc.length - 1].count,
        count: groupItems.length,
      },
    ],
    [] as IGroup[],
  )

  const groupedItems = Object.values(groupMap).flat(1)

  return { groups, groupedItems }
}
