import { css } from '@emotion/core'
import { FieldArray, useFormikContext } from 'formik'
import React from 'react'
import { useIntl } from '../../i18n'
import { ITheme } from '../../styles'
import { getLoLeafPath } from '../../utils'
import { DisplayTextField } from '../editable'
import { FormikTextField } from '../formik'
import { ProfileImage } from './fields'
import { CandidateValue, useCandidateContext } from './host'

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
  }
`

export const TopSection: React.FC = () => {
  const { value: candidate, state } = useCandidateContext()

  const { values } = useFormikContext<CandidateValue>()

  const { intl } = useIntl()
  return (
    <section css={topSectionStyles}>
      <form>
        <DisplayTextField
          className="name"
          name={getLoLeafPath(candidate, 'firstName')}
          placeholder={intl(undefined, 'candidate', 'firstName')}
        />
        <DisplayTextField
          className="name"
          name={getLoLeafPath(candidate, 'lastName')}
          placeholder={intl(undefined, 'candidate', 'firstName')}
        />

        <DisplayTextField
          className="company"
          name={getLoLeafPath(candidate, 'company')}
          placeholder={intl(undefined, 'candidate', 'company')}
        />
        <DisplayTextField
          className="company"
          name={getLoLeafPath(candidate, 'position')}
          placeholder={intl(undefined, 'candidate', 'position')}
        />
        <DisplayTextField
          className="company"
          name={getLoLeafPath(candidate, 'headline')}
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
