import { css } from 'emotion'
import * as React from 'react'

import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box, PersonaCandidate } from '..'
import { IPersonaCandidateProps } from '../Persona'
import { TagGroup } from '../Tag'
import { CardFragment } from './generated/CardFragment'
import { Status } from './Status'

const cardStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .box-details {
      margin-top: ${theme.spacing.s1};
      display: flex;

      .box-statuses {
        width: 72px;
        flex-shrink: 0;
        display: flex;
        justify-content: space-evenly;

        & > div {
          padding: 0 2px;
        }
      }

      .tag-group {
        margin-left: 16px;
      }
    }
  `,
})

export interface ICardProps<TLinkState = {}> {
  application: CardFragment
  personaProps?: IPersonaCandidateProps
}

export const Card: React.SFC<ICardProps> = ({ application, personaProps }) => {
  return (
    <Box styles={cardStyles}>
      <PersonaCandidate
        candidate={application.candidate}
        size={PersonaSize.size72}
        {...personaProps}
      />
      <Box className="box-details">
        <Box className="box-statuses">
          <Status.Update application={application} />
          <Status.Rating ratings={[]} />
          <Status.Comment comments={application.candidate.comments} />
        </Box>
        <TagGroup className="tag-group" tags={application.candidate.tags || []} />
      </Box>
    </Box>
  )
}
