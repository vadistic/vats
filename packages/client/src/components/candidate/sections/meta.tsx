import React from 'react'
import { Box } from '../../box'
import { DisplaySourcePicker, DisplayTagPicker } from '../widgets'

export const MetaSection: React.FC = () => {
  return (
    <Box>
      <DisplayTagPicker name="tags" />
      <DisplaySourcePicker name="sources" />
    </Box>
  )
}
