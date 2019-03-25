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
  const reversedGroupMap: StringMap<number[]> = {}

  const push = (item: T, itemIndex: number, key: string) => {
    if (!groupMap[key]) {
      groupMap[key] = []
      reversedGroupMap[key] = []
    }
    groupMap[key].push(item)
    reversedGroupMap[key].push(itemIndex)
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const key = groupBy(item)

    if (Array.isArray(key)) {
      key.forEach(k => {
        push(item, i, k)
      })
    } else {
      push(item, i, key)
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

  const reversedGroups = Object.values(reversedGroupMap)

  const reversedItems = reversedGroups.flat(1)

  return { groups, groupMap, items: groupedItems, reversedItems, reversedGroups, reversedGroupMap }
}
