import {
  FocusTrapZone,
  IconButton,
  IModalProps,
  IPanelProps,
  Modal,
  Panel,
  PanelType,
} from 'office-ui-fabric-react'
import React, { Suspense, useMemo, useState } from 'react'

const SurfaceFallback: React.FC = () => {
  console.log('Surface suspense')

  return <p>Loading surface</p>
}

interface ISurfaceNavigation {
  onDismiss: () => void
  onExpand: () => void
}

const SurfaceNavigation: React.FC<ISurfaceNavigation> = ({ onDismiss, onExpand }) => (
  <div>
    <IconButton onClick={onDismiss} iconProps={{ iconName: 'ChromeClose' }} />
    <IconButton onClick={onExpand} iconProps={{ iconName: 'FullScreen' }} />
  </div>
)

export enum SurfaceType {
  Panel = 'PANEL',
  Modal = 'MODAL',
}

export interface ISurfaceProps extends ISurfaceNavigation {
  surfaceType?: SurfaceType
}

export const Surface: React.FC<ISurfaceProps> = ({
  children,
  onDismiss: onDismissed,
  surfaceType = SurfaceType.Panel,
  onExpand,
}) => {
  const [open, setOpen] = useState(true)

  // this only for closing animation before navigation hits
  const handleDissmiss = () => {
    setOpen(false)
  }

  const inner = <Suspense fallback={<SurfaceFallback />}>{children}</Suspense>

  // TODO: mayby only panels?
  const renderModal = () => (
    <Modal onDismissed={onDismissed} onDismiss={handleDissmiss} isOpen={open} isBlocking={true}>
      {inner}
    </Modal>
  )

  const renderNavigation = () => (
    <SurfaceNavigation onDismiss={handleDissmiss} onExpand={onExpand} />
  )

  const renderPanel = () => (
    <Panel
      onRenderNavigation={renderNavigation}
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
