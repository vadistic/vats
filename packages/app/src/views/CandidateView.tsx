import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import * as React from 'react'

interface ICandidateViewProps {
  path: string
}

export const CandidateView: React.SFC<ICandidateViewProps> = () => (
  <Fabric>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </Fabric>
) 
