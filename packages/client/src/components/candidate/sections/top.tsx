import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import React from 'react'
import { useIntl } from '../../../i18n'
import { ITheme } from '../../../styles'
import { getLoLeafPath } from '../../../utils'
import { Box } from '../../box'
import { DisplayTextField } from '../../editable'
import { ProfileImage } from '../fields'
import { CandidateValue, useCandidateContext } from '../host'

export const TopSection: React.FC = () => {
  const { value: candidate, state } = useCandidateContext()

  const { values } = useFormikContext<CandidateValue>()

  const { intl } = useIntl()
  return (
    <Box direction="row">
      <Box>
        <DisplayTextField
          fontSize="xxLarge"
          name={getLoLeafPath(candidate, 'firstName')}
          placeholder={intl(undefined, 'candidate', 'firstName')}
        />
        <DisplayTextField
          fontSize="xxLarge"
          name={getLoLeafPath(candidate, 'lastName')}
          placeholder={intl(undefined, 'candidate', 'firstName')}
        />

        <DisplayTextField
          fontSize="large"
          name={getLoLeafPath(candidate, 'company')}
          placeholder={intl(undefined, 'candidate', 'company')}
        />
        <DisplayTextField
          fontSize="large"
          name={getLoLeafPath(candidate, 'position')}
          placeholder={intl(undefined, 'candidate', 'position')}
        />
        <DisplayTextField
          fontSize="large"
          name={getLoLeafPath(candidate, 'headline')}
          placeholder={intl(undefined, 'candidate', 'headline')}
        />
      </Box>
      <Box>
        <figure>
          <ProfileImage avatar={candidate.avatar} />
        </figure>
      </Box>
    </Box>
  )
}
