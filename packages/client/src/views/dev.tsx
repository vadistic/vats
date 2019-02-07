import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Router } from '../components'
import { routes } from '../routes'

export interface IDevViewProps extends RouteComponentProps {}

export const DevView: React.FC<IDevViewProps> = () => (
  <>
    <h1>Dev</h1>
  </>
)
