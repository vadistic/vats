import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import * as React from 'react'

interface ICandidateViewProps {
  path: string
}

export const LoginView: React.SFC<ICandidateViewProps> = () => (
  <Fabric>
    <h3> Login!</h3>

    
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </Fabric>
)
