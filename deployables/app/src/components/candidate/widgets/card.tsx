import { css } from '@emotion/core'
import { useTheme } from '@vats/styling'
import { ActionButton, IButtonProps } from 'office-ui-fabric-react'
import React from 'react'
import { CandidateValue } from '../host'
import { CandidatePersona, CandidatePersonaProps } from './persona'

export interface CandidateCardProps {
  candidate: CandidateValue
  linkProps?: CandidatePersonaProps['linkProps']
  actions?: IButtonProps[]
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, linkProps, actions }) => {
  const theme = useTheme()

  const styles = css`
    padding: ${theme.spacing.m};
    max-width: ${theme.sizes.ml};
    background-color: ${theme.semanticColors.bodyBackground};
  `

  const renderActions = actions && (
    <div>
      {actions.map(action => (
        <ActionButton {...action} />
      ))}
    </div>
  )

  return (
    <div css={styles}>
      <CandidatePersona candidate={candidate} linkProps={linkProps} />
      {renderActions}
    </div>
  )
}
