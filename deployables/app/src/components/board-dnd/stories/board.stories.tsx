import { storiesOf } from '@storybook/react'
import { mutableMoveElement } from '@vats/utils'
import { runInAction, set, toJS } from 'mobx'
import { useObservable, useObserver } from 'mobx-react-lite'
import { IGroup } from 'office-ui-fabric-react'
import { useMemo } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import backend from 'react-dnd-html5-backend'
import { StoriesFixture } from '../../../stories/fixture.stories'
import { Board, DraggableValue } from '../board'

// tslint:disable-next-line: no-implicit-dependencies
import * as R from 'ramda'

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

  const groupProp = 'type'

  const sortByType = R.sortBy(R.prop(groupProp))

  // inital sort
  useMemo(() => {
    set(items, sortByType(items))
  }, [])

  const getGroups = (_items: Item[]) => {
    const groupMap = R.groupBy<Item>(R.prop(groupProp), _items)

    return Object.entries(groupMap).reduce(
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
  }

  const renderItem = (item: Item) => (
    <div>
      <p>{item.text}</p>
      <small>{item.type}</small>
    </div>
  )

  const onDrop = (item: Item, target: DraggableValue, source: DraggableValue) => {
    runInAction('drop update', () => {
      mutableMoveElement(items, source.pointer.index, target.pointer.index)
      items[target.pointer.index][groupProp] = target.group.key as any
    })
  }

  return useObserver(() => (
    <div>
      <Board
        groups={getGroups(toJS(items))}
        items={toJS(items)}
        onRenderItem={renderItem}
        onDrop={onDrop}
      />
    </div>
  ))
}

storiesOf('board react-dnd', module)
  .addDecorator(story => (
    <DragDropContextProvider backend={backend}>
      <StoriesFixture>{story()}</StoriesFixture>
    </DragDropContextProvider>
  ))
  .add('basic', () => <BoardFixture />)
