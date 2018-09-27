import { css } from 'emotion'
import * as R from 'ramda'
import * as React from 'react'
import { DropResult, HookProvided } from 'react-beautiful-dnd'

import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { filterNull } from '../../utils'
import { TApplicationBoardItem } from '../Applications'
import { FastCard } from '../Card'
import data from './fixtureData'
import { DraggableSingleContainer } from './SingleContainer'
import { TObjectWithId } from './types'

const draggableFixtureStyles = ({ theme }: { theme: ITheme }) => ({
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

export class DraggableSingleFixture extends React.Component<any> {
  public state = {
    items: data.applications,
  }

  private _onRenderCell = (item: TApplicationBoardItem) => <FastCard application={item} />

  public onItemInvoked = (item, index, ev): void => {
    console.log('Item Invoked', item, index, ev)
  }

  public onDragEnd = (result: DropResult, provided: HookProvided): void => {
    console.log(result, provided)
  }

  public render() {
    const { items } = this.state

    return (
      <DraggableSingleContainer
        onRenderCell={this._onRenderCell}
        onDragEnd={this.onDragEnd}
        items={items}
        onItemInvoked={this.onItemInvoked}
      >
        {({ selection, list }) => <div>{list}</div>}
      </DraggableSingleContainer>
    )
  }
}
