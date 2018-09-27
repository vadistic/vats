import { css } from 'emotion'
import * as R from 'ramda'
import * as React from 'react'

import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box } from '../Box'
import { SelectionList } from './List'

import data from './fixtureData'

import { TApplicationBoardItem } from '../Applications'
import { Card } from '../Card'

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

export class SelectionListFixture extends React.Component<any> {
  public state = {
    items: data.applications,
  }

  private _onRenderCell = (item: TApplicationBoardItem) => <Card application={item} />

  public render() {
    const { items } = this.state

    return (
      <SelectionList onRenderCell={this._onRenderCell} items={items}>
        {({ selection, renderSelectionList }) => (
          <Box styles={selectionListFixtureStyles}>{renderSelectionList()}</Box>
        )}
      </SelectionList>
    )
  }
}
