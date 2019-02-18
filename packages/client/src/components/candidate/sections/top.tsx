import React from 'react'
import { useIntl } from '../../../i18n'
import { getLoLeafPath } from '../../../utils'
import { Box } from '../../box'
import { DisplayTextField, DisplayTextFieldProps } from '../../display'
import { CandidateValue, useCandidateContext } from '../host'
import { UserAvatar } from '../widgets'

interface ICustomDisplayTextField extends DisplayTextFieldProps {
  name: keyof CandidateValue
}

const CustomDisplayTextField: React.FC<ICustomDisplayTextField> = ({ name, ...rest }) => {
  const { intl } = useIntl()
  const { value: candidate } = useCandidateContext()

  return (
    <DisplayTextField
      name={getLoLeafPath(candidate, name)}
      placeholder={intl(undefined, 'candidate', name)}
      {...rest}
    />
  )
}

export const TopSection: React.FC = () => {
  const { value: candidate } = useCandidateContext()

  return (
    <Box direction="row">
      <Box css={{ justifyContent: 'center' }}>
        <CustomDisplayTextField fontSize="xxLarge" name="firstName" />
        <CustomDisplayTextField fontSize="xxLarge" name="lastName" />
        <CustomDisplayTextField fontSize="large" name="company" />
        <CustomDisplayTextField fontSize="large" name="position" />
        <CustomDisplayTextField fontSize="large" name="headline" />
      </Box>
      <Box>
        <UserAvatar avatar={candidate.avatar} />
      </Box>
    </Box>
  )
}
