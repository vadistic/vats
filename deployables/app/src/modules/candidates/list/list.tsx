import { css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { usePartialSelector } from '@vats/store'
import { useTheme } from '@vats/styling'
import { useObserver } from 'mobx-react-lite'
import { FocusZone, FocusZoneDirection, GroupedList } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { CandidateCard, CandidateProfileTab, personaCandidateSelector } from '../../candidate'
import { CandidatesContext, CandidatesElement, CandidatesElementProps } from '../store'

export interface CandidatesListProps extends RouteComponentProps {}

export const CandidatesList: React.FC<CandidatesListProps> = ({ children, navigate }) => {
  const store = useContext(CandidatesContext)
  const theme = useTheme()

  const styles = css`
    .ms-List-cell {
      margin: ${theme.spacing.m};
    }
  `

  const renderCell = (nestingDepth?: number, candidate?: CandidatesElement, index?: number) => {
    if (candidate) {
      return <CandidateListCell candidate={candidate} />
    }
  }

  return useObserver(() => {
    if (store.data.candidates.length === 0) {
      return null
    }

    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
        {/* children necessary for reach router */}
        {children}
        <GroupedList items={store.data.candidates} onRenderCell={renderCell} css={styles} />
      </FocusZone>
    )
  }, 'CandidatesList')
}

const CandidateListCell: React.FC<CandidatesElementProps> = ({ candidate }) => {
  const personaCandidate = usePartialSelector(personaCandidateSelector)(candidate)

  return (
    <CandidateCard
      candidate={personaCandidate}
      key={candidate.id}
      linkProps={{
        name: {
          to: `./${candidate.id}`,
          options: { state: { tab: CandidateProfileTab.info } },
        },
        date: {
          to: `./${candidate.id}`,
          options: { state: { tab: CandidateProfileTab.overview } },
        },
        review: {
          to: `./${candidate.id}`,
          options: { state: { tab: CandidateProfileTab.reviews } },
        },
        comments: {
          to: `./${candidate.id}`,
          options: { state: { tab: CandidateProfileTab.comments } },
        },
      }}
    />
  )
}
