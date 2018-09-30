import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { DefaultButton } from 'office-ui-fabric-react/lib/Button'

export interface IDashboardViewProps extends RouteComponentProps {}

export const DashboardView: React.SFC<IDashboardViewProps> = () => (
  <>
    <h3>Dashboard View</h3>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </>
)
