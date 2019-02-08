import { FocusTrapZone, IModalProps, Modal, Panel, PanelType } from 'office-ui-fabric-react'
import React, { Suspense, useMemo, useState } from 'react'

const SurfaceFallback: React.FC = () => {
  console.log('Surface suspense')

  return <p>Loading surface</p>
}

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
  surfaceType = SurfaceType.Panel,
}) => {
  const [open, setOpen] = useState(true)

  // this only for closing animation before navigation hits
  const handleDissmiss = () => {
    setOpen(false)
  }

  const inner = (
    <Suspense fallback={<SurfaceFallback />}>
      <FocusTrapZone>{children}</FocusTrapZone>
    </Suspense>
  )

  const renderModal = () => (
    <Modal onDismissed={onDismissed} onDismiss={handleDissmiss} isOpen={open} isBlocking={true}>
      {inner}
    </Modal>
  )

  const renderPanel = () => (
    <Panel
      onDismissed={onDismissed}
      onDismiss={handleDissmiss}
      isOpen={open}
      type={PanelType.medium}
      isBlocking={false}
      isLightDismiss={false}
    >
      <FocusTrapZone>{inner}</FocusTrapZone>
    </Panel>
  )

  if (surfaceType === SurfaceType.Panel) {
    return renderPanel()
  }

  if (surfaceType === SurfaceType.Modal) {
    return renderModal()
  }

  return null
}
