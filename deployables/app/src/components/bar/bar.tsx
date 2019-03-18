import { useTranslation } from '@vats/i18n'
import { ICommandBarItemProps } from 'office-ui-fabric-react'
import { useMemo } from 'react'

export interface CommandBarItemMap {
  [key: string]: Partial<ICommandBarItemProps>
}

const toItemsArray = (defaultItemMap: CommandBarItemMap) => (itemMap: CommandBarItemMap) =>
  Object.entries(itemMap).map(([key, value]) => ({ ...defaultItemMap[key], key, ...value }))

export const useCommandBarItems = (itemsMapInit: () => CommandBarItemMap, deps: any = []) => {
  const { tp } = useTranslation()

  const defaultItemMap = useMemo(() => {
    const map: CommandBarItemMap = {
      sort: {
        name: tp.action.sort(),
        iconProps: {
          iconName: 'sortlines',
        },
      },
    }

    return map
  }, [])

  const items = useMemo(() => toItemsArray(defaultItemMap)(itemsMapInit()), [deps])

  return { items }
}
