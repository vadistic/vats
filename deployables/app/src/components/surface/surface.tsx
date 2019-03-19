import { IconButton, Modal, Panel, PanelType } from 'office-ui-fabric-react'
import React, { useState } from 'react'

interface SurfaceNavigation {
  onDismiss: () => void
  onExpand: () => void
  onEdit: () => void
  onSubmit: () => void
  editable: boolean
}

const SurfaceNavigation: React.FC<SurfaceNavigation> = ({
  onDismiss,
  onExpand,
  onEdit,
  onSubmit,
  editable,
}) => (
  <div>
    <IconButton onClick={onDismiss} iconProps={{ iconName: 'chromeclose' }} />
    <IconButton onClick={onExpand} iconProps={{ iconName: 'fullscreen' }} />
    {editable ? (
      <IconButton onClick={onSubmit} iconProps={{ iconName: 'save' }} />
    ) : (
      <IconButton onClick={onEdit} iconProps={{ iconName: 'edit' }} />
    )}
  </div>
)

export enum SurfaceType {
  Panel = 'PANEL',
  Modal = 'MODAL',
}

export interface SurfaceProps {
  type?: SurfaceType
  navitationProps: SurfaceNavigation
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  type = SurfaceType.Panel,
  navitationProps: { onDismiss: onDismissed, ...rest },
}) => {
  const [open, setOpen] = useState(true)

  // this only for closing animation before navigation hits
  const handleDissmiss = () => {
    setOpen(false)
  }

  // TODO: mayby only panels?
  const renderModal = () => (
    <Modal onDismissed={onDismissed} onDismiss={handleDissmiss} isOpen={open} isBlocking={true}>
      {children}
    </Modal>
  )

  const renderNavigation = () => <SurfaceNavigation onDismiss={handleDissmiss} {...rest} />

  const renderPanel = () => (
    <Panel
      onRenderNavigation={renderNavigation}
      onDismissed={onDismissed}
      onDismiss={handleDissmiss}
      isOpen={open}
      type={PanelType.medium}
      isBlocking={false}
      isLightDismiss={false}
      styles={{
        content: {
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
        },
      }}
    >
      {children}
    </Panel>
  )

  if (type === SurfaceType.Panel) {
    return renderPanel()
  }

  if (type === SurfaceType.Modal) {
    return renderModal()
  }

  return null
}
