import { Selection } from 'office-ui-fabric-react'
import { Grouped } from '../../utils'
import { BoardEventDetails, BoardOnDropProps } from './context'

export interface BoardUpdateActionProps<T> {
  grouped: Grouped
  selection: Selection
  items: T[]
  update: (selectedItems: T[], target: BoardEventDetails) => void | T[]
}

/*
 * Refactored because it's tricky as hell, but without any array searches (so saved this 5 ms^^)
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
export const boardUpdateAction = <T>({
  grouped,
  selection,
  items,
  update,
}: BoardUpdateActionProps<T>) => ({ source, target }: BoardOnDropProps) => {
  // prepare
  const selectedIndicies = selection.getSelectedIndices()
  const realSelectedIndicies = selectedIndicies.map(index => grouped.reversedItems[index])

  const isAppended = target.localIndex === target.group.count && target.group.count !== 0
  const isShuffle = target.groupIndex === source.groupIndex && target.localIndex > source.localIndex

  const targetItemIndex = isAppended
    ? grouped.reversedItems[target.group.startIndex + target.group.count - 1] + 1
    : grouped.reversedItems[target.index] + (isShuffle ? 1 : 0)

  // cut
  let selectedItems: T[] = []
  let shift = 0

  realSelectedIndicies
    .sort()
    .reverse()
    .forEach(index => {
      selectedItems.push(...items.splice(index, 1))

      if (index < targetItemIndex + shift) {
        shift += -1
      }
    })

  // update
  const res = update(selectedItems, target)
  // mutable or not
  if (res) {
    selectedItems = res
  }

  // paste
  const realTargetIndex = targetItemIndex + shift
  items.splice(realTargetIndex, 0, ...selectedItems)

  // deselect
  selection.setItems(grouped.items as any, true)
  selection.setAllSelected(false)

  // reselect
  if (selectedItems.length > 1) {
    // I'm really starting to regretting this idea to use only index calculations
    const selectionShift = selectedIndicies.reduce(
      (acc, index) => (index < target.index ? acc - 1 : acc),
      0,
    )

    selection.setModal(true)
    selection.toggleRangeSelected(target.index + selectionShift, selectedItems.length)
  } else {
    selection.setIndexSelected(target.index, true, true)
  }
}
