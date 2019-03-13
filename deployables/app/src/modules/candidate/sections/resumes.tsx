import { useTranslation } from '@vats/i18n'
import { useTheme } from '@vats/styling'
import { observer } from 'mobx-react-lite'
import { Stack } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { ResumeCard } from '../../../components'
import { SingleCandidateContext } from '../store'

export const UploadCard: React.FC = () => {
  return (
    <>
      <h3>TODO: UPLOAD CTA</h3>
    </>
  )
}

export const CandidateResumesSectionBase: React.FC = () => {
  const { data } = useContext(SingleCandidateContext)

  if (!data.candidate) {
    return null
  }

  const { tp } = useTranslation()
  const theme = useTheme()

  const resumesFile = data.candidate.resumesFile

  if (!resumesFile) {
    return (
      <>
        <p>{tp.common.noResult}</p>
        <UploadCard />
      </>
    )
  }

  return (
    <Stack gap={theme.spacing.m}>
      {resumesFile.map(resume => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </Stack>
  )
}

export const CandidateResumesSection = observer(CandidateResumesSectionBase)
