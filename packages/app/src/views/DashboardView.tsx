import { RouteComponentProps } from '@reach/router'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import * as React from 'react'

export interface IDashboardViewProps extends RouteComponentProps {}

export const DashboardView: React.SFC<IDashboardViewProps> = () => (
  <>
    <p>Dashboard View</p>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </>
)
