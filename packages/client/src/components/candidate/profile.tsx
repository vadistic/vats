import { tryGetIn } from '@vats/utils'
import { PivotItem } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { useTranslation } from '../../i18n'
import { SurfacePivot } from '../surface'
import { useCandidateContext } from './host'
import {
  CandidateCommentsSection,
  CandidateInfoSection,
  CandidateMetaSection,
  CandidateOverviewSection,
  CandidateResumesSection,
  CandidateTopSection,
} from './sections'

export const CandidateProfile: React.FC = () => {
  const { value: candidate } = useCandidateContext()
  const { tp } = useTranslation()
  const [selectedKey, setSelectedKey] = useState('overview')

  const handleLinkClick = (item?: PivotItem) => {
    if (item && item.props.itemKey) {
      setSelectedKey(item.props.itemKey)
    }
  }

  const resumesCount =
    (tryGetIn(candidate, 'resumesFile') || []).length +
    (tryGetIn(candidate, 'resumesString') || []).length +
    (tryGetIn(candidate, 'coverLettersFile') || []).length +
    (tryGetIn(candidate, 'coverLettersString') || []).length

  const commentsCount = (tryGetIn(candidate, 'comments') || []).length

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
