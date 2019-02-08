import { css } from '@emotion/core'
import { IButtonProps, IconButton } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { Editable } from '../editable'
import { CandidateContext } from './context'
import { CandidateActionType } from './reducer'
import { TopSection } from './top-section'

const EditButton: React.FC<IButtonProps> = props => (
  <IconButton iconProps={{ iconName: 'Edit' }} {...props} />
)

export const candidateProfileStyles = () => css`
  width: 100%;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;
  }
`

export const CandidateProfile: React.FC = () => {
  const { candidate, state, dispatch } = useContext(CandidateContext)

  const handleSubmit = () => {
    // noop
  }

  const toggleEdit = () => {
    dispatch({ type: CandidateActionType.Edit })
  }

  return (
    <div css={candidateProfileStyles}>
      <EditButton onClick={toggleEdit} />
      <Editable onSubmit={handleSubmit} initialValues={candidate} editable={state.local.editable}>
        <TopSection />
      </Editable>
    </div>
  )
}
