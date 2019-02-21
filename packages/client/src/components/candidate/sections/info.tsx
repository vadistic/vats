import React from 'react'
import { useIntl } from '../../../i18n'
import { pathProxy } from '../../../utils'
import { Box } from '../../box'
import { DisplayTextFieldArray } from '../../display'
import { CandidateValue } from '../host'

export const InfoSection: React.FC = () => {
  const { intl } = useIntl()
  const p = pathProxy<CandidateValue>()

  return (
    <Box css={theme => ({ width: theme.sizes.ml })}>
      <DisplayTextFieldArray
        name={p.phones.PATH}
        emptyElement=""
        labelProps={{ text: intl(null, 'candidate', 'phones'), iconProps: { iconName: 'phone' } }}
      />
      <DisplayTextFieldArray
        name={p.emails.PATH}
        emptyElement=""
        labelProps={{ text: intl(null, 'candidate', 'emails'), iconProps: { iconName: 'mail' } }}
      />
      <DisplayTextFieldArray
        name={p.links.PATH}
        emptyElement=""
        labelProps={{ text: intl(null, 'candidate', 'links'), iconProps: { iconName: 'link' } }}
      />
    </Box>
  )
}
