import { Form } from 'formik'
import { IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { Box } from '../box'
import { Editable } from '../editable'
import { HostActionType } from '../host'
import { CandidateContext, useCandidateContext } from './host'
import { CandidateActionType } from './reducer'
import { InfoSection, TopSection } from './sections'

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
      <Editable onSubmit={handleSubmit} context={CandidateContext} editable={state.local.editable}>
        <Form>
          <EditButton />
          <TopSection />
          <InfoSection />
        </Form>
      </Editable>
    </Box>
  )
}
