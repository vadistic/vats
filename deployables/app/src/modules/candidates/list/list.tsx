import { css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { useTheme } from '@vats/styling'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import { FocusZone, FocusZoneDirection, GroupedList } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { CandidateCard, SingleCandidateValue } from '../../candidate'
import { CandidatesContext } from '../store'

export interface CandidatesListProps extends RouteComponentProps {}

export const CandidatesList: React.FC<CandidatesListProps> = ({ children, navigate }) => {
  const store = useContext(CandidatesContext)
  const theme = useTheme()

  const styles = css`
    .ms-List-cell {
      margin: ${theme.spacing.m};
    }
  `

  const renderCell = (nestingDepth?: number, candidate?: SingleCandidateValue, index?: number) =>
    useObserver(() => {
      if (candidate) {
        return (
          <CandidateCard
            candidate={toJS(candidate)}
            key={candidate.id}
            linkProps={{ name: `./${candidate.id}` }}
          />
        )
      }
      return null
    }, 'CandidatesList/renderCell')

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
