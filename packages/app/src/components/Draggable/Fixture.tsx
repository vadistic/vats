import { css } from 'emotion'
import * as R from 'ramda'
import * as React from 'react'

import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { TApplicationBoardItem } from '../Applications'
import { Box } from '../Box'
import { FastCard } from '../Card'
import { DraggableContainer } from './Container'
import data from './fixtureData'

const selectionListFixtureStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    width: 100%;
    height: 100%;
    min-height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;

    background: ${theme.palette.neutralLight};
  `,
})

export class SelectionDraggableListFixture extends React.Component<any> {
  public state = {
    items: data.applications,
  }

  private _onRenderCell = (item: TApplicationBoardItem) => <FastCard application={item} />

  public onItemInvoked = e => {
    console.log('Item Invoked', e)
  }

  public render() {
    const { items } = this.state

    return (
      <DraggableContainer
        onRenderCell={this._onRenderCell}
        items={items}
        onItemInvoked={this.onItemInvoked}
      >
        {({ selection, list }) => <Box styles={selectionListFixtureStyles}>{list}</Box>}
      </DraggableContainer>
    )
  }
}
