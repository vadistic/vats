import React from 'react'
import { useTranslation } from '../../../i18n'
import { pathProxy } from '../../../utils'
import { Box } from '../../box'
import { DisplayTextFieldArray } from '../../display'
import { CandidateValue } from '../host'

export const InfoSection: React.FC = () => {
  const { tp } = useTranslation()
  const p = pathProxy<CandidateValue>()

  return (
    <Box css={theme => ({ width: theme.sizes.ml })}>
      <DisplayTextFieldArray
        name={p.phones.PATH}
        emptyElement=""
        labelProps={{ text: tp.candidate.phones({ count: 3 }), iconProps: { iconName: 'phone' } }}
      />
      <DisplayTextFieldArray
        name={p.emails.PATH}
        emptyElement=""
        labelProps={{ text: tp.candidate.emails({ count: 3 }), iconProps: { iconName: 'mail' } }}
      />
      <DisplayTextFieldArray
        name={p.links.PATH}
        emptyElement=""
        labelProps={{ text: tp.candidate.links({ count: 3 }), iconProps: { iconName: 'link' } }}
      />
    </Box>
  )
}
