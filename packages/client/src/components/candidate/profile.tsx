import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import { IButtonProps, IconButton } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { Editable } from '../editable'
import { HostActionType } from '../host'
import { useCandidateContext } from './host'
import { CandidateActionType } from './reducer'
import { TopSection } from './top-section'

const EditButton: React.FC<IButtonProps> = props => (
  <IconButton iconProps={{ iconName: 'Edit' }} {...props} />
)

const SubmitButton: React.FC<IButtonProps> = props => {
  const { submitForm } = useFormikContext()

  const handleClick = () => {
    if (submitForm) {
      submitForm()
    }
  }
  return <IconButton iconProps={{ iconName: 'Save' }} onClick={handleClick} {...props} />
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
  const { value, state, dispatch } = useCandidateContext()

  const handleSubmit = (values: object) => {
    dispatch({ type: HostActionType.Update })
  }

  const toggleEdit = () => {
    dispatch({ type: CandidateActionType.Edit })
  }

  return (
    <div css={candidateProfileStyles}>
      <EditButton onClick={toggleEdit} />
      <Editable onSubmit={handleSubmit} initialValues={value} editable={state.local.editable}>
        <TopSection />
        <SubmitButton />
      </Editable>
    </div>
  )
}
