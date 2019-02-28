import { RouteComponentProps } from '@reach/router'
import React, { Suspense, useRef } from 'react'
import { routes } from '../../routes'
import { Editable } from '../editable'
import { FormikContextValue } from '../formik'
import { HostQuery } from '../host'
import { LoadingSpinner } from '../loading'
import { Surface } from '../surface'
import {
  CandidateActions,
  CandidateContext,
  CandidateHostProvider,
  CandidateValue,
  useCandidateContext,
} from './host'
import { CandidateProfile } from './profile'
import { updateCandidate } from './thunks'

export interface CandidateSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

// TODO: Skeleton?
const CandidateSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading candidate...'} />

export const CandidateSurfaceBase: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
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
    if (formikRef.current && formikRef.current.dirty) {
      dispatch(updateCandidate(values))
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
        <HostQuery context={CandidateContext}>
          <Editable onSubmit={processSubmit} context={CandidateContext} formikRef={formikRef}>
            <CandidateProfile />
          </Editable>
        </HostQuery>
      </Suspense>
    </Surface>
  )
}

export const CandidateSurface: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
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
