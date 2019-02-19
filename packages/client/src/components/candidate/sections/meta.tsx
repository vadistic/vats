import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '../../box'
import { DisplayLabel } from '../../display'
import { DisplaySourcePicker, DisplayTagPicker } from '../widgets'

export const MetaSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box>
      <DisplayLabel text={t('candidate.tags', { count: 3 })} iconProps={{ iconName: 'tag' }} />
      <DisplayTagPicker name="tags" />
      <DisplayLabel text={t('candidate.sources', { count: 3 })} iconProps={{ iconName: 'flow' }} />
      <DisplaySourcePicker name="sources" />
    </Box>
  )
}
