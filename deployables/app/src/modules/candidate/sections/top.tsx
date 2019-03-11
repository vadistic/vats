import { DisplayTextField } from '@vats/forms'
import { useTranslation } from '@vats/i18n'
import { pathProxy } from '@vats/utils'
import { Stack } from 'office-ui-fabric-react'
import React from 'react'
import { CandidateValue } from '../host'
import { CandidateAvatar } from '../widgets'

export const CandidateTopSection: React.FC = () => {
  const p = pathProxy<CandidateValue>()
  const { tp } = useTranslation()

  return (
    <Stack horizontal={true} horizontalAlign="space-between">
      <Stack verticalAlign="center">
        <DisplayTextField
          fontSize="xxLarge"
          name={p.firstName.PATH}
          placeholder={tp.candidate.firstName()}
        />
        <DisplayTextField
          fontSize="xxLarge"
          name={p.lastName.PATH}
          placeholder={tp.candidate.lastName()}
        />
        <DisplayTextField
          fontSize="large"
          name={p.company.PATH}
          placeholder={tp.candidate.company()}
        />
        <DisplayTextField
          fontSize="large"
          name={p.position.PATH}
          placeholder={tp.candidate.position()}
        />
        <DisplayTextField
          fontSize="large"
          name={p.headline.PATH}
          placeholder={tp.candidate.headline()}
        />
      </Stack>
      <Stack verticalAlign="center">
        <CandidateAvatar />
      </Stack>
    </Stack>
  )
}
