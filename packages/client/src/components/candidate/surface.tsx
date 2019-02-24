import { RouteComponentProps } from '@reach/router'
import React, { Suspense, useRef } from 'react'
import { routes } from '../../routes'
import { Editable } from '../editable'
import { FormikContextValue } from '../formik'
import { LoadingSpinner } from '../loading'
import { Surface } from '../surface'
import {
  CandidateActions,
  CandidateContext,
  CandidateHostProvider,
  CandidateHostQuery,
  CandidateHostThunk,
  CandidateValue,
  useCandidateContext,
} from './host'
import { CandidateProfile } from './profile'

export interface ICandidateSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

// TODO: Skeleton?
const CandidateSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading candidate...'} />

export const CandidateSurfaceBase: React.FC<ICandidateSurfaceProps> = ({ navigate, id }) => {
  const { dispatch } = useCandidateContext()

  const handleDismiss = () => {
    if (navigate) {
      navigate('..')
    }
  }

  const handleExpand = () => {
    if (navigate) {
      navigate('/' + routes.candidate.basepath + '/' + id)
    }
  }

  const formikRef = useRef<FormikContextValue<CandidateValue>>(null)
  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm()
    }
  }

  const handleEdit = () => {
    dispatch(CandidateActions.setEditable(true))
  }

  const processSubmit = (values: CandidateValue) => {
    const submitThunk = (_values: CandidateValue): CandidateHostThunk => async (
      _dispatch,
      _state,
      _helper,
    ) => {
      const res = _helper.autoUpdate(_values)

      if (res) {
        _dispatch(CandidateActions.setEditable(false))
      }

      // if (res && res.data) {
      // send toast
      // }
    }

    if (formikRef.current && formikRef.current.dirty) {
      dispatch(submitThunk(values))
    }
  }

  return (
    <Surface
      navitationProps={{
        onDismiss: handleDismiss,
        onEdit: handleEdit,
        onSubmit: handleSubmit,
        onExpand: handleExpand,
      }}
    >
      <Suspense fallback={<CandidateSurfaceFallback />}>
        <CandidateHostQuery>
          <Editable onSubmit={processSubmit} context={CandidateContext} formikRef={formikRef}>
            <CandidateProfile />
          </Editable>
        </CandidateHostQuery>
      </Suspense>
    </Surface>
  )
}

export const CandidateSurface: React.FC<ICandidateSurfaceProps> = ({ navigate, id }) => {
  if (!id) {
    console.error('CandidateSurface: No id provided')
    return null
  }

  return (
    <CandidateHostProvider initArg={{ id }}>
      <CandidateSurfaceBase navigate={navigate} id={id} />
    </CandidateHostProvider>
  )
}
