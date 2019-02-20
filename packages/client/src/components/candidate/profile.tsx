import { Form, useFormikContext } from 'formik'
import { IconButton, Pivot, PivotItem } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { tryGetIn } from '../../utils'
import { Box } from '../box'
import { Comments } from '../comments'
import { Editable } from '../editable'
import { diffAutoUpdataData } from '../host'
import {
  CandidateActions,
  CandidateContext,
  CandidateHostThunk,
  CandidateValue,
  useCandidateContext,
} from './host'
import { InfoSection, MetaSection, TopSection } from './sections'

const profileSubmitThunk = (values: CandidateValue): CandidateHostThunk => async (
  dispatch,
  state,
  helper,
) => {
  console.log('SUBMIT', values)

  const promise = helper.autoUpdate(values)
  dispatch(CandidateActions.edit(false))

  const res = await promise

  // if (res && res.data) {
  // send toast
  // }
}

const EditButton: React.FC = () => {
  const { state, dispatch } = useCandidateContext()
  const { submitForm } = useFormikContext()

  const toggleEdit = () => {
    dispatch(CandidateActions.edit(!state.local.editable))
  }

  const triggerSubmit = () => {
    submitForm()
  }

  if (state.local.editable) {
    return <IconButton iconProps={{ iconName: 'Save' }} type="submit" onClick={triggerSubmit} />
  } else {
    return <IconButton iconProps={{ iconName: 'Edit' }} type="button" onClick={toggleEdit} />
  }
}

export const CandidateProfile: React.FC = () => {
  const { value: candidate, state, dispatch } = useCandidateContext()
  const [selectedKey, setSelectedKey] = useState('overview')

  const handleSubmit = (values: CandidateValue) => {
    dispatch(profileSubmitThunk(values))
  }

  const handleLinkClick = (item?: PivotItem) => {
    if (item && item.props.itemKey) {
      setSelectedKey(item.props.itemKey)
    }
  }

  const resumesCount =
    (tryGetIn(candidate, 'resumesFile') || []).length +
    (tryGetIn(candidate, 'resumesString') || []).length +
    (tryGetIn(candidate, 'coverLettersFile') || []).length +
    (tryGetIn(candidate, 'coverLettersString') || []).length

  return (
    <Box>
      <Editable onSubmit={handleSubmit} context={CandidateContext}>
        <form
          onSubmit={ev => {
            ev.preventDefault()
          }}
        >
          <EditButton />
          <TopSection />
          <Pivot onLinkClick={handleLinkClick} defaultSelectedKey={selectedKey}>
            <PivotItem headerText="Overview" itemKey="overview" itemIcon="Trackers">
              <p>Overview content</p>
            </PivotItem>
            <PivotItem headerText="Info" itemKey="info" itemIcon="ContactCard">
              <MetaSection />
              <InfoSection />
            </PivotItem>
            <PivotItem
              headerText="Resumes"
              itemKey="resumes"
              itemCount={resumesCount}
              itemIcon="TextDocument"
            >
              <p>Resume content</p>
            </PivotItem>
            <PivotItem headerText="Review" itemKey="review" itemCount={42} itemIcon="FavoriteList">
              <p>Review content</p>
            </PivotItem>
            <PivotItem headerText="Comments" itemKey="comments" itemCount={42} itemIcon="Comment">
              <Comments />
            </PivotItem>
          </Pivot>
        </form>
      </Editable>
    </Box>
  )
}
