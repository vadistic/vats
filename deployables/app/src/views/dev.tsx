import { RouteComponentProps } from '@reach/router'
import React from 'react'

export interface DevViewProps extends RouteComponentProps {}

export const DevView: React.FC<DevViewProps> = () => (
  <>
    <h1>Dev</h1>
  </>
)
