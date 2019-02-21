import { useFormikContext } from 'formik'
import { IconButton, Pivot, PivotItem } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { useIntl } from '../../i18n'
import { tryGetIn } from '../../utils'
import { Box } from '../box'
import { Editable } from '../editable'
import {
  CandidateActions,
  CandidateContext,
  CandidateHostThunk,
  CandidateValue,
  useCandidateContext,
} from './host'
import { InfoSection, MetaSection, TopSection } from './sections'
import { CandidateComments } from './widgets'

const profileSubmitThunk = (values: CandidateValue): CandidateHostThunk => async (
  dispatch,
  state,
  helper,
) => {
  console.log('SUBMIT', values)

  const promise = helper.autoUpdate(values)
  dispatch(CandidateActions.edit(false))

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
  const { value: candidate, dispatch } = useCandidateContext()
  const { intl } = useIntl()
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

  const commentsCount = (tryGetIn(candidate, 'comments') || []).length

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
            <PivotItem
              headerText={intl(null, 'candidate', 'overview')}
              itemKey="overview"
              itemIcon="Trackers"
            >
              <p>Overview content</p>
            </PivotItem>
            <PivotItem
              headerText={intl(null, 'candidate', 'info')}
              itemKey="info"
              itemIcon="ContactCard"
            >
              <MetaSection />
              <InfoSection />
            </PivotItem>
            <PivotItem
              headerText={intl({ count: 3 }, 'candidate', 'resumes')}
              itemKey="resumes"
              itemCount={resumesCount}
              itemIcon="TextDocument"
            >
              <p>Resume content</p>
            </PivotItem>
            <PivotItem
              headerText={intl({ count: 3 }, 'candidate', 'reviews')}
              itemKey="review"
              itemCount={0}
              itemIcon="FavoriteList"
            >
              <p>Review content</p>
            </PivotItem>
            <PivotItem
              headerText={intl({ count: 3 }, 'candidate', 'comments')}
              itemKey="comments"
              itemCount={commentsCount}
              itemIcon="Comment"
            >
              <CandidateComments />
            </PivotItem>
          </Pivot>
        </form>
      </Editable>
    </Box>
  )
}
