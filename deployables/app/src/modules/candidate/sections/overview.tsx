import { DisplayLabel } from '@vats/forms'
import { useTranslation } from '@vats/i18n'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { DisplayDateTime } from '../../../components'
import { CandidateContext } from '../store'

const CandidateOverviewSectionBase: React.FC = () => {
  const store = useContext(CandidateContext)
  const { tp } = useTranslation()

  if (!store.data.candidate) {
    return null
  }

  return (
    <>
      <DisplayLabel text={tp.candidate.createdAt()} />
      <DisplayDateTime isoDate={store.data.candidate.createdAt} />
      <DisplayLabel text={tp.candidate.updatedAt()} />
      <DisplayDateTime isoDate={store.data.candidate.updatedAt} />
      <p>TODO: Display activity feed & tasks here</p>
    </>
  )
}

export const CandidateOverviewSection = observer(CandidateOverviewSectionBase)
