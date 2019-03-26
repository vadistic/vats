import { StringMap } from '@vats/utils'
import { IGroup } from 'office-ui-fabric-react'

export type PartialGroup = Partial<IGroup> & {
  key: string
}

export type Grouped = ReturnType<typeof getGrouped>

export const getGrouped = <T>(
  template: PartialGroup[],
  items: T[],
  getter: (item: T) => string | string[],
) => {
  const groupMap = template.reduce(
    (acc, group, i) => ({ ...acc, [group.key || '' + i]: [] }),
    {} as StringMap<T[]>,
  )

  const reversedGroupMap = template.reduce(
    (acc, group, i) => ({ ...acc, [group.key || '' + i]: [] }),
    {} as StringMap<number[]>,
  )

  const push = (item: T, itemIndex: number, key: string) => {
    if (!groupMap[key]) {
      return
    }

    groupMap[key].push(item)
    reversedGroupMap[key].push(itemIndex)
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const key = getter(item)

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
