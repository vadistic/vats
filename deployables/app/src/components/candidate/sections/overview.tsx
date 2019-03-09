import { DisplayLabel } from '@vats/forms'
import { useHostContext } from '@vats/host'
import { useTranslation } from '@vats/i18n'
import React from 'react'
import { DisplayDateTime, useDayjs } from '../../datetime'
import { candidateHost } from '../host'

export const CandidateOverviewSection: React.FC = () => {
  const {
    data: { candidate },
  } = useHostContext(candidateHost)
  const { tp } = useTranslation()

  if (!candidate) {
    return null
  }

  return (
    <>
      <DisplayLabel text={tp.candidate.createdAt()} />
      <DisplayDateTime isoDate={candidate.createdAt} />
      <DisplayLabel text={tp.candidate.updatedAt()} />
      <DisplayDateTime isoDate={candidate.updatedAt} />
      <p>TODO: Display activity feed & tasks here</p>
    </>
  )
}
