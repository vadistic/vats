import * as React from 'react'

import { DefaultButton } from 'office-ui-fabric-react/lib/Button'

export interface ITestViewProps {}

export const TestView: React.SFC<ITestViewProps> = () => (
  <>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </>
)
