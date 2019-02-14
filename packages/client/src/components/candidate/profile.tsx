import { Form } from 'formik'
import { IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { Box } from '../box'
import { Editable } from '../editable'
import {
  CandidateActions,
  CandidateContext,
  CandidateHostActions,
  CandidateValue,
  useCandidateContext,
} from './host'
import { InfoSection, TopSection } from './sections'

const EditButton: React.FC = () => {
  const { state, dispatch } = useCandidateContext()

  const toggleEdit = () => {
    dispatch(CandidateActions.edit(!state.local.editable))
  }

  if (state.local.editable) {
    return <IconButton iconProps={{ iconName: 'Save' }} type="submit" />
  } else {
    return <IconButton iconProps={{ iconName: 'Edit' }} onClick={toggleEdit} />
  }
}

export const CandidateProfile: React.FC = () => {
  const { value, state, dispatch } = useCandidateContext()

  const handleSubmit = (values: CandidateValue) => {
    dispatch({ type: 'EDIT', payload: false })
    dispatch(CandidateHostActions.update(values))
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
