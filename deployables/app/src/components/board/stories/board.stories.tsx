import { storiesOf } from '@storybook/react'
import { useComputed, useReaction } from '@vats/store'
import { runInAction, toJS } from 'mobx'
import { useObservable, useObserver } from 'mobx-react-lite'
import { Selection, SelectionMode } from 'office-ui-fabric-react'
import { useMemo, useRef } from 'react'
import { StoriesFixture } from '../../../stories/fixture.stories'
import { getGrouped } from '../../../utils'
import { boardUpdateAction } from '../action'
import { Board, BoardProps } from '../board'
import { BoardCardPointer, BoardOnDropProps } from '../context'

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
  type: 'TODO' | 'DONE' | 'CUT'
}

const BoardFixture: React.FC = () => {
  const items = useObservable(ITEMS as Item[])

  const selection = useRef(
    new Selection({
      getKey: (item: any) => item.id,
      selectionMode: SelectionMode.multiple,
    }),
  )

  const template = [
    {
      key: 'TODO',
    },
    {
      key: 'DONE',
    },
    {
      key: 'CUT',
    },
  ]

  const grouped = useComputed('grouped', () => getGrouped(template, toJS(items), item => item.type))

  useReaction(
    'selection items',
    () => items.length,
    () => {
      selection.current.setItems(grouped.get().items as any, true)
    },
    [],
  )

  useMemo(() => {
    selection.current.setItems(grouped.get().items as any)
  }, [])

  const renderItem = (item: Item, pointer: BoardCardPointer) => (
    <div>
      <p>{item.text}</p>
      <code>GroupedIndex: {pointer.index}</code>
      <br />
      <code>RealIndex: {grouped.get().reversedItems[pointer.index]}</code>
      <br />
      <small>{item.type}</small>
    </div>
  )

  const onDragEnd = (props: BoardOnDropProps) => {
    runInAction('drop update', () => {
      boardUpdateAction({
        grouped: grouped.get(),
        items,
        selection: selection.current,
        update: (selectedItems, { group }) =>
          selectedItems.forEach(item => {
            item.type = group.key as any
          }),
      })(props)
    })
  }

  const renderHeader: BoardProps['onRenderHeader'] = (group, groupItems) => (
    <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h3>{group.name}</h3>
      <span>{groupItems.length}</span>
    </div>
  )

  return useObserver(() => {
    return (
      <div>
        <Board
          onRenderHeader={renderHeader}
          selection={selection.current}
          groups={grouped.get().groups}
          items={grouped.get().items}
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
