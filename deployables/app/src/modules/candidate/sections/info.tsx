import { DisplayTextFieldArray } from '@vats/forms'
import { useTranslation } from '@vats/i18n'
import { pathProxy } from '@vats/utils'
import React from 'react'
import { Box } from '../../../components'
import { CandidateValue } from '../host'

export const CandidateInfoSection: React.FC = () => {
  const { tp } = useTranslation()
  const p = pathProxy<CandidateValue>()

  return (
    <Box css={theme => ({ width: theme.sizes.ml })}>
      <DisplayTextFieldArray
        name={p.phones.PATH}
        emptyElement=""
        labelProps={{ text: tp.candidate.phone({ count: 3 }), iconProps: { iconName: 'phone' } }}
      />
      <DisplayTextFieldArray
        name={p.emails.PATH}
        emptyElement=""
        labelProps={{ text: tp.candidate.email({ count: 3 }), iconProps: { iconName: 'mail' } }}
      />
      <DisplayTextFieldArray
        name={p.links.PATH}
        emptyElement=""
        labelProps={{ text: tp.candidate.link({ count: 3 }), iconProps: { iconName: 'link' } }}
      />
    </Box>
  )
}
