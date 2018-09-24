import { Link, LinkProps } from '@reach/router'
import * as dayjs from 'dayjs'
import { css } from 'emotion'
import * as React from 'react'

import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box, PersonaCandidate } from '..'
import { IPersonaCandidateProps } from '../Persona'
import { TagGroup } from '../Tag'
import { CardFragment } from './generated/CardFragment'

// TODO: refactor to application-based
export interface ICardProps<TLinkState = {}> {
  application: CardFragment
  personaProps?: IPersonaCandidateProps
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

export const Card: React.SFC<ICardProps> = ({ application, personaProps }) => {
  const updatedAt = dayjs()
  return (
    <Box styles={authTemplateStyles}>
      <PersonaCandidate
        candidate={application.candidate}
        size={PersonaSize.size48}
        {...personaProps}
      />
      <TagGroup tags={application.candidate.tags || []} />
    </Box>
  )
}
