import { Form, useFormikContext } from 'formik'
import { IButtonProps, IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { Box } from '../box'
import { Editable } from '../editable'
import { HostActionType } from '../host'
import { useCandidateContext } from './host'
import { CandidateActionType } from './reducer'
import { TopSection } from './sections/top'

const EditButton: React.FC = () => {
  const { state, dispatch } = useCandidateContext()

  const toggleEdit = () => {
    dispatch({ type: CandidateActionType.Edit })
  }

  if (state.local.editable) {
    return <IconButton iconProps={{ iconName: 'Save' }} type="submit" />
  } else {
    return <IconButton iconProps={{ iconName: 'Edit' }} onClick={toggleEdit} />
  }
}

export const CandidateProfile: React.FC = () => {
  const { value, state, dispatch } = useCandidateContext()

  const handleSubmit = (values: object) => {
    dispatch({ type: CandidateActionType.Edit, editable: false })
    dispatch({ type: HostActionType.AutoUpdate, payload: values })
  }

  return (
    <Box>
      <Editable onSubmit={handleSubmit} values={value} editable={state.local.editable}>
        <Form>
          <EditButton />
          <TopSection />
        </Form>
      </Editable>
    </Box>
  )
}
