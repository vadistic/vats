import { storiesOf } from '@storybook/react'
import { mutableMoveElement } from '@vats/utils'
import { runInAction, set, toJS } from 'mobx'
import { useObservable, useObserver } from 'mobx-react-lite'
import { IGroup, Selection, SelectionMode } from 'office-ui-fabric-react'
import { useMemo, useRef } from 'react'
import { StoriesFixture } from '../../../stories/fixture.stories'
import { Board, BoardProps } from '../board'

// tslint:disable-next-line: no-implicit-dependencies
import * as R from 'ramda'
import { BoardOnDropProps } from '../context'

const ITEMS = [
  {
    id: '1',
    text: 'Write a cool JS library',
    type: 'TODO',
  },
  {
    id: '2',
    text: 'Make it generic enough',
    type: 'DONE',
  },
  {
    id: '3',
    text: 'Write README',
    type: 'TODO',
  },
  {
    id: '4',
    text: 'Create some examples',
    type: 'DONE',
  },
  {
    id: '5',
    text: 'Spam in Twitter and IRC to promote it',
    type: 'TODO',
  },
  {
    id: '6',
    text: '???',
    type: 'DONE',
  },
  {
    id: '7',
    text: 'PROFIT',
    type: 'TODO',
  },
  {
    id: '8',
    text: 'More content',
    type: 'CUT',
  },
  {
    id: '9',
    text: 'Documentation',
    type: 'CUT',
  },
]

interface Item {
  id: string
  text: string
  type: 'TODO' | 'DONE'
}

const BoardFixture: React.FC = () => {
  const items = useObservable(ITEMS as Item[])
  const selection = useRef(
    new Selection({
      getKey: (item: any) => item.id,
      onSelectionChanged: () => {
        console.log('secection changed', selection.current.getSelection())
      },
      selectionMode: SelectionMode.multiple,
    }),
  )

  const groupProp = 'type'

  const sortByType = R.sortBy(R.prop(groupProp))

  // inital
  useMemo(() => {
    set(items, sortByType(items))

    selection.current.setItems(items as any)
  }, [])

  const getGroups = (_items: Item[]) => {
    const groupMap = R.groupBy<Item>(R.prop(groupProp), _items)

    const nextGroups = Object.entries(groupMap).reduce(
      (acc, [key, groupItems], i) => [
        ...acc,
        {
          key,
          name: key,
          startIndex: R.last(acc) ? R.last(acc)!.startIndex + R.last(acc)!.count : 0,
          count: groupItems.length,
        },
      ],
      [] as IGroup[],
    )

    console.log('nextGroups', nextGroups)

    return nextGroups
  }

  const renderItem = (item: Item) => (
    <div>
      <p>{item.text}</p>
      <small>{item.type}</small>
    </div>
  )

  const onDragEnd = ({ item, source, target }: BoardOnDropProps) => {
    runInAction('drop update', () => {
      items[source.index][groupProp] = target.group.key as any
      mutableMoveElement(items, source.index, target.index)
    })
  }

  const renderHeader: BoardProps['onRenderHeader'] = (group, groupItems) => (
    <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h3>{group.name}</h3>
      <span>{groupItems.length}</span>
    </div>
  )

  return useObserver(() => {
    const groups = getGroups(toJS(items))

    return (
      <div>
        <Board
          onRenderHeader={renderHeader}
          selection={selection.current}
          groups={groups}
          items={toJS(items)}
          onRenderItem={renderItem}
          onDrop={onDragEnd}
        />
      </div>
    )
  })
}

storiesOf('board react-smooth-dnd', module)
  .addDecorator(story => <StoriesFixture>{story()}</StoriesFixture>)
  .add('basic', () => <BoardFixture />)
