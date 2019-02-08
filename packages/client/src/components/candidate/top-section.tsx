import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import { IconButton } from 'office-ui-fabric-react'
import React, { useContext, useState } from 'react'
import { Candidate } from '../../generated/resolvers'
import { ITheme } from '../../styles'
import { getLeafPath } from '../../utils'
import { CandidateContext } from './context'
import { DisplayField, ProfileImage } from './fields'

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
  const { initialValues: form } = useFormikContext<Candidate>()
  const { candidate } = useContext(CandidateContext)

  const [disabled, setDisabled] = useState(true)

  const toggle = () => {
    setDisabled(!disabled)
  }

  return (
    <section css={topSectionStyles}>
      <form>
        <DisplayField className="name" name={getLeafPath(form, 'firstName')} disabled={disabled} />
        <DisplayField className="name" name={getLeafPath(form, 'lastName')} disabled={disabled} />

        <DisplayField className="company" name={getLeafPath(form, 'company')} disabled={disabled} />
        <DisplayField
          className="company"
          name={getLeafPath(form, 'position')}
          disabled={disabled}
        />
        <DisplayField
          className="company"
          name={getLeafPath(form, 'headline')}
          disabled={disabled}
        />
        {disabled && <IconButton iconProps={{ iconName: 'Edit' }} onClick={toggle} />}
      </form>
      <div>
        <figure>
          <ProfileImage avatar={candidate.avatar} />
        </figure>
      </div>
    </section>
  )
}
