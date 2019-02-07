import { IModalProps, Modal, Panel, PanelType } from 'office-ui-fabric-react'
import React, { useState } from 'react'

export interface ISurfaceProps {
  onDismiss: () => void
  surfaceType?: SurfaceType
}

export enum SurfaceType {
  Panel = 'PANEL',
  Modal = 'MODAL',
}

export const Surface: React.FC<ISurfaceProps> = ({
  children,
  onDismiss: onDismissed,
  surfaceType = SurfaceType.Modal,
}) => {
  const [open, setOpen] = useState(true)

  // this only for closing animation before navigation hits
  const handleDissmiss = () => {
    setOpen(false)
  }

  if (surfaceType === SurfaceType.Modal) {
    return (
      <Modal onDismissed={onDismissed} onDismiss={handleDissmiss} isOpen={open} isBlocking={true}>
        {children}
      </Modal>
    )
  }

  if (surfaceType === SurfaceType.Panel) {
    return (
      <Panel
        onDismissed={onDismissed}
        onDismiss={handleDissmiss}
        isOpen={open}
        type={PanelType.medium}
        isBlocking={false}
        isLightDismiss={false}
      >
        {children}
      </Panel>
    )
  }

  return null
}
