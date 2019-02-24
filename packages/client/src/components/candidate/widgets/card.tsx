import { css } from '@emotion/core'
import { ActionButton, IButtonProps } from 'office-ui-fabric-react'
import React from 'react'
import { useTheme } from '../../../styles'
import { CandidateValue } from '../host'
import { CandidatePersona, ICandidatePersonaProps } from './persona'

export interface ICandidateCardProps {
  candidate: CandidateValue
  linkProps?: ICandidatePersonaProps['linkProps']
  actions?: IButtonProps[]
}

export const CandidateCard: React.FC<ICandidateCardProps> = ({ candidate, linkProps, actions }) => {
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
