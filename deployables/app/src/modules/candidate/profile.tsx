import { useTranslation } from '@vats/i18n'
import { tryGetIn } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { PivotItem } from 'office-ui-fabric-react'
import React, { useContext, useState } from 'react'
import { SurfacePivot } from '../../components'
import {
  CandidateCommentsSection,
  CandidateInfoSection,
  CandidateMetaSection,
  CandidateOverviewSection,
  CandidateResumesSection,
  CandidateTopSection,
} from './sections'
import { SingleCandidateContext } from './store'

export const CandidateProfileBase: React.FC = () => {
  const { data } = useContext(SingleCandidateContext)
  const { tp } = useTranslation()
  const [selectedKey, setSelectedKey] = useState('overview')

  if (!data.candidate) {
    return null
  }

  const handleLinkClick = (item?: PivotItem) => {
    if (item && item.props.itemKey) {
      setSelectedKey(item.props.itemKey)
    }
  }

  const resumesCount =
    (tryGetIn(data.candidate, 'resumesFile') || []).length +
    (tryGetIn(data.candidate, 'resumesString') || []).length +
    (tryGetIn(data.candidate, 'coverLettersFile') || []).length +
    (tryGetIn(data.candidate, 'coverLettersString') || []).length

  const commentsCount = (tryGetIn(data.candidate, 'comments') || []).length

  return (
    <>
      <CandidateTopSection />
      <SurfacePivot
        onLinkClick={handleLinkClick}
        defaultSelectedKey={selectedKey}
        items={[
          {
            headerText: tp.candidate.overview(),
            itemKey: 'overview',
            itemIcon: 'trackers',
            children: <CandidateOverviewSection />,
          },
          {
            headerText: tp.candidate.info(),
            itemKey: 'info',
            itemIcon: 'contactcard',
            children: (
              <>
                <CandidateMetaSection />
                <CandidateInfoSection />
              </>
            ),
          },
          {
            headerText: tp.candidate.review({ count: 3 }),
            itemKey: 'reviews',
            itemIcon: 'textdocument',
            itemCount: 0,
            children: <p>Review content</p>,
          },
          {
            headerText: tp.candidate.resume({ count: 3 }),
            itemKey: 'resumes',
            itemIcon: 'favoritelist',
            itemCount: resumesCount,
            children: <CandidateResumesSection />,
          },
          {
            headerText: tp.candidate.comment({ count: 3 }),
            itemKey: 'comments',
            itemIcon: 'comment',
            itemCount: commentsCount,
            children: <CandidateCommentsSection />,
          },
        ]}
      />
    </>
  )
}

export const CandidateProfile = observer(CandidateProfileBase)
