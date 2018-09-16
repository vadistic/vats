import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import * as React from 'react'

export interface ITestViewProps {}

export const TestView: React.SFC<ITestViewProps> = () => (
  <>
    <DefaultButton primary={true}>I am a button.</DefaultButton>
  </>
)
