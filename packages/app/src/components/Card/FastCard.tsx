import { css } from 'emotion'
import * as React from 'react'

import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box, PersonaCandidate } from '..'
import { IPersonaCandidateProps } from '../Persona'
import { TagGroup } from '../Tag'
import { CardFragment } from './generated/CardFragment'
import { Status } from './Status'

const fastCardStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    user-select: none;

    width: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .tag-group {
      margin-top: ${theme.spacing.s2};
      /* margin-left: 108px; */
    }

    .ms-Persona {
      .ms-Persona-tertiaryText {
        display: flex;

        & > div {
          margin: 0 2px;

          :first-child {
            margin-left: 0;
          }

          :last-child {
            margin-right: 0;
          }
        }
      }
    }
  `,
})

export interface IFastCardProps {
  application: CardFragment
  personaProps?: IPersonaCandidateProps
}

export const FastCard: React.SFC<IFastCardProps> = ({ application, personaProps }) => {
  return (
    <Box styles={fastCardStyles}>
      {application && application.candidate.firstName + ' ' + application.candidate.lastName}
      <TagGroup className="tag-group" wrap={true} tags={application.candidate.tags || []} />
    </Box>
  )
}
