import { useTheme } from '@vats/styling'
import { ActionButton, IButtonProps, IconButton } from 'office-ui-fabric-react'
import React from 'react'

export const DisplayActionButton: React.FC<IButtonProps> = props => {
  const theme = useTheme()

  return (
    <ActionButton
      styles={{
        icon: { fontSize: theme.fonts.smallPlus.fontSize, marginLeft: 0 },
        textContainer: { fontSize: theme.fonts.smallPlus.fontSize },
      }}
      {...props}
    />
  )
}

export const DisplayIconButton: React.FC<IButtonProps> = props => {
  const theme = useTheme()

  return (
    <IconButton
      styles={{
        icon: { fontSize: theme.fonts.smallPlus.fontSize },
      }}
      {...props}
    />
  )
}
