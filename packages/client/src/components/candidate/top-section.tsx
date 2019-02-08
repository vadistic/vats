import { css } from '@emotion/core'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useIntl } from '../../i18n'
import { ITheme } from '../../styles'
import { getLeafPath } from '../../utils'
import { DisplayTextField } from '../editable'
import { CandidateContext } from './context'
import { ProfileImage } from './fields'

export const topSectionStyles = (theme: ITheme) => css`
  display: flex;
  justify-content: space-between;

  form {
    position: relative;

    .ms-TextField-fieldGroup {
      background-color: inherit;
      height: auto;
    }

    .name {
      input {
        ${theme.fonts.superLarge as any};
        font-weight: bold;
      }
    }

    .company {
      input {
        ${theme.fonts.xLarge as any};
      }
    }

    button {
      position: absolute;
      top: -${theme.spacing.s1};
      left: -${theme.spacing.s1};
    }
  }
`

export const TopSection: React.FC = () => {
  const { candidate } = useContext(CandidateContext)

  const { intl } = useIntl()

  return (
    <section css={topSectionStyles}>
      <form>
        <DisplayTextField
          className="name"
          name={getLeafPath(candidate, 'firstName')}
          placeholder={intl(undefined, 'candidate', 'firstName')}
        />
        <DisplayTextField
          className="name"
          name={getLeafPath(candidate, 'lastName')}
          placeholder={intl(undefined, 'candidate', 'firstName')}
        />

        <DisplayTextField
          className="company"
          name={getLeafPath(candidate, 'company')}
          placeholder={intl(undefined, 'candidate', 'company')}
        />
        <DisplayTextField
          className="company"
          name={getLeafPath(candidate, 'position')}
          placeholder={intl(undefined, 'candidate', 'position')}
        />
        <DisplayTextField
          className="company"
          name={getLeafPath(candidate, 'headline')}
          placeholder={intl(undefined, 'candidate', 'headline')}
        />
      </form>
      <div>
        <figure>
          <ProfileImage avatar={candidate.avatar} />
        </figure>
      </div>
    </section>
  )
}
