import { RouteComponentProps } from '@reach/router'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import * as React from 'react'

interface ICandidateViewProps extends RouteComponentProps {}

export const CandidateView: React.SFC<ICandidateViewProps> = () => (
  <>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </>
)
