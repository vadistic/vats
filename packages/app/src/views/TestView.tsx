import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import {
  HoverCardFixture,
  LinkButton,
  PersonaFixture,
  SelectionDraggableListFixture,
  SelectionListFixture,
  TileFixture,
} from '../components'

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.SFC<ITestViewProps> = () => (
  <>
    <h3>Test view</h3>
    <ul>
      <li>
        <LinkButton to="persona">Persona</LinkButton>
      </li>
      <li>
        <LinkButton to="hover">HoverCard</LinkButton>
      </li>
      <li>
        <LinkButton to="tile">Tile</LinkButton>
      </li>
      <li>
        <LinkButton to="selection-draggable-list">Selection Draggable List</LinkButton>
      </li>
      <li>
        <LinkButton to="selection-list">Selection List</LinkButton>
      </li>
    </ul>
    <Router basepath="/test">
      <PersonaFixture path="persona" />
      <HoverCardFixture path="hover" />
      <TileFixture path="tile" />
      <SelectionListFixture path="selection-list" />
      <SelectionDraggableListFixture path="selection-draggable-list" />
    </Router>
  </>
)
