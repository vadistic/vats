import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import * as React from 'react'

interface IDashboardViewProps {
  path: string
}

export const DashboardView: React.SFC<IDashboardViewProps> = () => (
  <Fabric>
    <p>Dashboard View</p>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </Fabric>
) 
