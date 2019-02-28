import { css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { FocusZone, FocusZoneDirection, GroupedList } from 'office-ui-fabric-react'
import React from 'react'
import { useTheme } from '../../../styles'
import { CandidateCard, CandidateValue } from '../../candidate'
import { useCandidatesContext } from '../host'

export interface CandidatesListProps extends RouteComponentProps {}

export const CandidatesList: React.FC<CandidatesListProps> = ({ children, navigate }) => {
  const { value: candidates, state } = useCandidatesContext()
  const theme = useTheme()

  const renderCell = (nestingDepth?: number, candidate?: CandidateValue, index?: number) => {
    if (candidate) {
      return (
        <CandidateCard
          candidate={candidate}
          key={candidate.id}
          linkProps={{ name: `./${candidate.id}` }}
        />
      )
    }
    return null
  }

  const styles = css`
    .ms-List-cell {
      margin: ${theme.spacing.m};
    }
  `

  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      {/* children necessary for reach router */}
      {children}
      <GroupedList items={candidates} onRenderCell={renderCell} css={styles} />
    </FocusZone>
  )
}
