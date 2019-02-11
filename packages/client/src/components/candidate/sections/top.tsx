import { FieldArray, useFormikContext } from 'formik'
import React, { useMemo } from 'react'
import { useIntl } from '../../../i18n'
import { getLoLeafPath } from '../../../utils'
import { Box } from '../../box'
import { DisplayFieldArray, DisplayTextField, DisplayTextFieldBase } from '../../editable'
import { ProfileImage } from '../fields'
import { CandidateValue, useCandidateContext } from '../host'

export const TopSection: React.FC = () => {
  const { value: candidate } = useCandidateContext()

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

        <DisplayFieldArray<CandidateValue> name={getLoLeafPath(candidate, 'phones')}>
          {({ values: _candidate, push }) => {
            if (_candidate.phones.length === 0) {
              push('')
            }

            return _candidate.phones.map((phone, i) => (
              <DisplayTextField
                key={'phone_' + i}
                fontSize="large"
                name={getLoLeafPath(candidate, 'phones', i)}
                placeholder={intl({ count: 1 }, 'candidate', 'phone')}
              />
            ))
          }}
        </DisplayFieldArray>
      </Box>
      <Box>
        <figure>
          <ProfileImage avatar={candidate.avatar} />
        </figure>
      </Box>
    </Box>
  )
}
