import React from 'react'
import { useIntl } from '../../../i18n'
import { getLoPathAlt } from '../../../utils'
import { Box } from '../../box'
import { DisplayTextFieldArray } from '../../display'
import { CandidateValue } from '../host'

export const InfoSection: React.FC = () => {
  const { intl } = useIntl()

  return (
    <Box css={theme => ({ width: theme.sizes.ml })}>
      <DisplayTextFieldArray
        name={getLoPathAlt<CandidateValue>()('phones')}
        emptyElement=""
        labelProps={{ text: intl(null, 'candidate', 'phones'), iconProps: { iconName: 'phone' } }}
      />
      <DisplayTextFieldArray
        name={getLoPathAlt<CandidateValue>()('emails')}
        emptyElement=""
        labelProps={{ text: intl(null, 'candidate', 'emails'), iconProps: { iconName: 'mail' } }}
      />
      <DisplayTextFieldArray
        name={getLoPathAlt<CandidateValue>()('links')}
        emptyElement=""
        labelProps={{ text: intl(null, 'candidate', 'links'), iconProps: { iconName: 'link' } }}
      />
    </Box>
  )
}
