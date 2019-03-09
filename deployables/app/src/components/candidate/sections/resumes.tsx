import { useHostContext } from '@vats/host'
import { useTranslation } from '@vats/i18n'
import { useTheme } from '@vats/styling'
import { Stack } from 'office-ui-fabric-react'
import React from 'react'
import { ResumeCard } from '../../resume'
import { candidateHost } from '../host'

export const UploadCard: React.FC = () => {
  return (
    <>
      <h3>TODO: UPLOAD CTA</h3>
    </>
  )
}

export const CandidateResumesSection: React.FC = () => {
  const {
    data: { candidate },
  } = useHostContext(candidateHost)

  if (!candidate) {
    return null
  }

  const { tp } = useTranslation()
  const theme = useTheme()

  const { resumesFile } = candidate

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
