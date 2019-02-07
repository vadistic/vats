// issue: https://github.com/OfficeDev/office-ui-fabric-react/issues/7874
import { IModalProps } from 'office-ui-fabric-react'
import React from 'react'

declare module 'office-ui-fabric-react' {
  const Modal: React.FC<IModalProps>
}
