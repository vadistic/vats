import * as React from 'react'

import { DefaultButton } from 'office-ui-fabric-react/lib/Button'

export interface IDashboardViewProps {}

export const DashboardView: React.SFC<IDashboardViewProps> = () => (
  <>
    <p>Dashboard View</p>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </>
)