import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { DefaultButton } from 'office-ui-fabric-react/lib/Button'

interface ICandidateViewProps extends RouteComponentProps {}

export const CandidateView: React.SFC<ICandidateViewProps> = () => (
  <>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </>
)
