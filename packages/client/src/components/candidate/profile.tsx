import { useFormikContext } from 'formik'
import { IconButton, Pivot, PivotItem, Stack } from 'office-ui-fabric-react'
import React, { useRef, useState } from 'react'
import { useTranslation } from '../../i18n'
import { tryGetIn } from '../../utils'
import { Box } from '../box'
import { Editable } from '../editable'
import { FormikContextValue } from '../formik'
import { SurfacePivot } from '../surface'
import {
  CandidateActions,
  CandidateContext,
  CandidateHostThunk,
  CandidateValue,
  useCandidateContext,
} from './host'
import {
  CandidateCommentsSection,
  CandidateInfoSection,
  CandidateMetaSection,
  CandidateOverviewSection,
  CandidateResumesSection,
  CandidateTopSection,
} from './sections'

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

interface IEditButtonProps {
  submitForm: () => void
}

const EditButton: React.FC<IEditButtonProps> = ({ submitForm }) => {
  const { state, dispatch } = useCandidateContext()

  const toggleEdit = () => {
    dispatch(CandidateActions.edit(!state.local.editable))
  }

  if (state.local.editable) {
    return <IconButton iconProps={{ iconName: 'Save' }} type="button" onClick={submitForm} />
  } else {
    return <IconButton iconProps={{ iconName: 'Edit' }} type="button" onClick={toggleEdit} />
  }
}

export const CandidateProfile: React.FC = () => {
  const { value: candidate, dispatch } = useCandidateContext()
  const { tp } = useTranslation()
  const [selectedKey, setSelectedKey] = useState('overview')

  const formikRef = useRef<FormikContextValue<CandidateValue>>(null)

  const submitForm = () => {
    if (formikRef.current) {
      formikRef.current.submitForm()
    }
  }

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
      <EditButton submitForm={submitForm} />
      <Editable onSubmit={handleSubmit} context={CandidateContext} formikRef={formikRef}>
        <CandidateTopSection />
        <SurfacePivot
          onLinkClick={handleLinkClick}
          defaultSelectedKey={selectedKey}
          items={[
            {
              headerText: tp.candidate.overview(),
              itemKey: 'overview',
              itemIcon: 'trackers',
              children: <CandidateOverviewSection />,
            },
            {
              headerText: tp.candidate.info(),
              itemKey: 'info',
              itemIcon: 'contactcard',
              children: (
                <>
                  <CandidateMetaSection />
                  <CandidateInfoSection />
                </>
              ),
            },
            {
              headerText: tp.candidate.review({ count: 3 }),
              itemKey: 'reviews',
              itemIcon: 'textdocument',
              itemCount: 0,
              children: <p>Review content</p>,
            },
            {
              headerText: tp.candidate.resume({ count: 3 }),
              itemKey: 'resumes',
              itemIcon: 'favoritelist',
              itemCount: resumesCount,
              children: <CandidateResumesSection />,
            },
            {
              headerText: tp.candidate.comment({ count: 3 }),
              itemKey: 'comments',
              itemIcon: 'comment',
              itemCount: commentsCount,
              children: <CandidateCommentsSection />,
            },
          ]}
        />
      </Editable>
    </Box>
  )
}
