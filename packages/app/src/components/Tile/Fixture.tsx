import { css } from 'emotion'
import * as React from 'react'
import { State } from 'react-powerplug'

import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import {
  IObjectWithKey,
  ISelection,
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/Selection'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box } from '../Box'
import { Tile } from './Tile'

const tileFixtureStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    width: 100%;
    height: 100%;
    min-height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.palette.themePrimary};
  `,
})

export const TileFixture: React.SFC<any> = props => {
  const _onItemInvoked = e => {
    console.log('item invoked', e)
  }

  const _onSelectionChanged = () => {
    console.log('selection change')
  }

  return (
    <State
      initial={{
        selection: new Selection({
          canSelectItem: () => true,
          onSelectionChanged: _onSelectionChanged,
          selectionMode: SelectionMode.single,
        }),
      }}
    >
      {({ state, setState }) => (
        <Box styles={tileFixtureStyles}>
          <MarqueeSelection selection={state.selection} isEnabled={true}>
            <SelectionZone selection={state.selection} onItemInvoked={_onItemInvoked}>
              <Tile selectionIndex={1} selection={state.selection}>
                Tile children
              </Tile>
            </SelectionZone>
          </MarqueeSelection>
        </Box>
      )}
    </State>
  )
}
