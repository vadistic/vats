import { useTranslation } from '@vats/i18n'
import { useStoreAction } from '@vats/store'
import { tryGetIn } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { PivotItem } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
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

export enum CandidateProfileTab {
  info = 'info',
  overview = 'overview',
  reviews = 'reviews',
  resumes = 'resumes',
  comments = 'comments',
}

export interface CandidateProfileProps {
  selectedTab: CandidateProfileTab
}

export const CandidateProfileBase: React.FC = () => {
  const store = useContext(SingleCandidateContext)
  const { tp } = useTranslation()

  if (!store.data.candidate) {
    return null
  }

  const changeTabAction = useStoreAction(store, `change tab`)((item?: PivotItem) => {
    if (item && item.props.itemKey) {
      store.state.surfaceTab = item.props.itemKey as CandidateProfileTab
    }
  })

  const resumesCount =
    (tryGetIn(store.data.candidate, 'resumesFile') || []).length +
    (tryGetIn(store.data.candidate, 'resumesString') || []).length +
    (tryGetIn(store.data.candidate, 'coverLettersFile') || []).length +
    (tryGetIn(store.data.candidate, 'coverLettersString') || []).length

  const commentsCount = (tryGetIn(store.data.candidate, 'comments') || []).length

  const selectedKey = store.state.surfaceTab

  console.log(selectedKey)

  return (
    <>
      <CandidateTopSection />
      <SurfacePivot
        onLinkClick={changeTabAction}
        selectedKey={selectedKey}
        items={[
          {
            headerText: tp.candidate.overview(),
            itemKey: CandidateProfileTab.overview,
            itemIcon: 'trackers',
            children: <CandidateOverviewSection />,
          },
          {
            headerText: tp.candidate.info(),
            itemKey: CandidateProfileTab.info,
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
            itemKey: CandidateProfileTab.reviews,
            itemIcon: 'textdocument',
            itemCount: 0,
            children: <p>Review content</p>,
          },
          {
            headerText: tp.candidate.resume({ count: 3 }),
            itemKey: CandidateProfileTab.resumes,
            itemIcon: 'favoritelist',
            itemCount: resumesCount,
            children: <CandidateResumesSection />,
          },
          {
            headerText: tp.candidate.comment({ count: 3 }),
            itemKey: CandidateProfileTab.comments,
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
