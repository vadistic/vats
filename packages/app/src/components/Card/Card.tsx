import * as dayjs from 'dayjs'
import { css } from 'emotion'
import * as React from 'react'

import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box, PersonaCandidate } from '..'
import { CardFragment } from './generated/CardFragment'

// TODO: refactor to application-based
export interface ICardProps {
  candidate: CardFragment
}

const authTemplateStyles = ({ theme: t }: { theme: ITheme }) => ({
  root: css`
    padding: 16px;
    background: ${t.palette.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `,
})

export const Card: React.SFC<ICardProps> = ({ candidate }) => {
  const updatedAt = dayjs()
  return (
    <Box styles={authTemplateStyles}>
      <PersonaCandidate candidate={candidate} size={PersonaSize.size72} />
    </Box>
  )
}
