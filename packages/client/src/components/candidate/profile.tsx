import { Form } from 'formik'
import { IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { Box } from '../box'
import { Editable } from '../editable'
import {
  CandidateActions,
  CandidateContext,
  CandidateHostActions,
  CandidateHostThunk,
  CandidateValue,
  useCandidateContext,
} from './host'
import { InfoSection, MetaSection, TopSection } from './sections'

const profileSubmitThunk = (values: CandidateValue): CandidateHostThunk => (
  dispatch,
  state,
  helper,
) => {
  console.log('submit', values)

  const { tags } = values

  dispatch(CandidateActions.update(values))
  dispatch(CandidateActions.edit(false))
}

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
    dispatch(profileSubmitThunk(values))
  }

  return (
    <Box>
      <Editable onSubmit={handleSubmit} context={CandidateContext} editable={state.local.editable}>
        <Form>
          <EditButton />
          <TopSection />
          <MetaSection />
          <InfoSection />
        </Form>
      </Editable>
    </Box>
  )
}
