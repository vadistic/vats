import { DisplayTextField } from '@vats/forms'
import { useTranslation } from '@vats/i18n'
import { pathProxy } from '@vats/utils'
import React from 'react'
import { JobValue } from './host'

export const JobProfile: React.FC = () => {
  const { tp } = useTranslation()
  const p = pathProxy<JobValue>()

  const contentPlaceholder = tp.common.empty()

  return (
    <>
      <DisplayTextField fontSize="xLarge" name={p.name.PATH} />
      <DisplayTextField
        multiline={true}
        name={p.excerpt.PATH}
        placeholder={contentPlaceholder}
        label={tp.job.excerpt()}
      />
      <DisplayTextField
        multiline={true}
        name={p.companyDescription.PATH}
        placeholder={contentPlaceholder}
        label={tp.job.companyDescription()}
      />
      <DisplayTextField
        multiline={true}
        name={p.description.PATH}
        placeholder={contentPlaceholder}
        label={tp.job.description()}
      />
      <DisplayTextField
        multiline={true}
        name={p.requirements.PATH}
        placeholder={contentPlaceholder}
        label={tp.job.requirements()}
      />
    </>
  )
}
