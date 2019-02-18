import React from 'react'
import { Box } from '../../box'
import { DisplayTagPicker } from '../widgets'

export const MetaSection: React.FC = () => {
  return (
    <Box>
      <DisplayTagPicker name="tags" />
    </Box>
  )
}