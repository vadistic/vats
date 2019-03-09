import React from 'react'
import { Box } from '../../../components'
import { DisplaySourcePicker, DisplayTagPicker } from '../widgets'

export const CandidateMetaSection: React.FC = () => {
  return (
    <Box>
      <DisplayTagPicker />
      <DisplaySourcePicker />
    </Box>
  )
}
