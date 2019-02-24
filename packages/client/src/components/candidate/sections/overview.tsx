import React from 'react'
import { useTranslation } from '../../../i18n'
import { DisplayDateTime, useDateTime } from '../../datetime'
import { DisplayLabel } from '../../display'
import { useCandidateContext } from '../host'

export const CandidateOverviewSection: React.FC = () => {
  const { value: candidate } = useCandidateContext()
  const { tp } = useTranslation()
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
