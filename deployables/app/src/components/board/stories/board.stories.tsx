import { storiesOf } from '@storybook/react'
import { useComputed, useReaction } from '@vats/store'
import { runInAction, toJS } from 'mobx'
import { useObservable, useObserver } from 'mobx-react-lite'
import { Selection, SelectionMode } from 'office-ui-fabric-react'
import { useMemo, useRef } from 'react'
import { StoriesFixture } from '../../../stories/fixture.stories'
import { getGroups } from '../../../utils'
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

  const grouped = useComputed('grouped', () => getGroups(toJS(items), item => item.type))

  const actionRef = useRef(false)

  useReaction(
    'selection items',
    () => items.length,
    () => {
      if (!actionRef.current) {
        selection.current.setItems(grouped.get().items as any, true)
      }
    },
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

  const onDragEnd = ({ source, target }: BoardOnDropProps) => {
    runInAction('drop update', () => {
      actionRef.current = true
      /*
       * Tricky as hell, but without any array searches (saved this 5 ms^^)
       *
       * targetItemIndex is adjusted with:
       * - if drop is appended to group (isAppended):
       *    - target item is the last item of this group (not target index)
       *    - splice should land AFTER this element (+1 increment)
       * - if group is shuffled (same group, descending vector)
       *    - target item goes up, so the splice should land AFTER (+1 increment)
       * - for each item spliced before adjusted target (index < targetItemIndex + shift)
       *    => shift pointer (of actual target index) moves to the begining (-1 decrement)
       */

      // prepare
      const reverseIndicies = grouped.get().reversedItems

      const selectedIndicies = selection.current.getSelectedIndices()
      const realSelectedIndicies = selectedIndicies.map(index => reverseIndicies[index])

      const isAppended = target.localIndex === target.group.count
      const isShuffle =
        target.groupIndex === source.groupIndex && target.localIndex > source.localIndex

      const targetItemIndex = isAppended
        ? reverseIndicies[target.group.startIndex + target.group.count - 1] + 1
        : reverseIndicies[target.index] + (isShuffle ? 1 : 0)

      // edit
      realSelectedIndicies.forEach(i => {
        items[i].type = target.group.key as any
      })

      // cut
      const movedItems: Item[] = []
      let shift = 0

      realSelectedIndicies
        .sort()
        .reverse()
        .forEach(index => {
          movedItems.push(...items.splice(index, 1))

          if (index < targetItemIndex + shift) {
            shift += -1
          }
        })

      // paste
      const realTargetIndex = targetItemIndex + shift
      items.splice(realTargetIndex, 0, ...movedItems)

      // deselect
      selection.current.setItems(grouped.get().items as any, true)
      selection.current.setAllSelected(false)

      // reselect
      if (movedItems.length > 1) {
        // really starting to regretting this idea to use only indexes
        const selectionShift = selectedIndicies.reduce(
          (acc, index) => (index < target.index ? acc - 1 : acc),
          0,
        )

        console.log(selectedIndicies, target.index, selectionShift)

        selection.current.setModal(true)
        selection.current.toggleRangeSelected(target.index + selectionShift, movedItems.length)
      } else {
        selection.current.setIndexSelected(target.index, true, true)
      }

      actionRef.current = false
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
