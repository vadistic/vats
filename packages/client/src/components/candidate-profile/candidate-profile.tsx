import { css } from '@emotion/core'
import { FormikProvider, useFormik } from 'formik'
import { IImageProps } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { Candidate } from '../../generated/queries'
import { CandidateContext } from '../../views'
import { TopSection } from './top-section'

export interface IProfileImageProps extends IImageProps {
  avatar: Candidate['avatar']
}

export const candidateProfileStyles = () => css`
  width: 100%;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;
  }
`

export const CandidateProfile: React.FC = () => {
  const handleSubmit = () => {
    // noop
  }
  const form = useContext(CandidateContext)

  const formik = useFormik({ initialValues: form, onSubmit: handleSubmit })

  return (
    <FormikProvider value={formik}>
      <div css={candidateProfileStyles}>
        <TopSection />
      </div>
    </FormikProvider>
  )
}
