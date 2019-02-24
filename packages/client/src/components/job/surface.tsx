import { RouteComponentProps } from '@reach/router'
import React, { Suspense, useRef } from 'react'
import { routes } from '../../routes'
import { Editable } from '../editable'
import { FormikContextValue } from '../formik'
import { HostQuery } from '../host'
import { LoadingSpinner } from '../loading'
import { Surface } from '../surface'
import { JobActions, JobContext, JobHostProvider, JobValue, useJobContext } from './host'
import { JobProfile } from './profile'
import { updateJob } from './thunks'

export interface IJobSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

const JobSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading job...'} />

export const JobSurfaceBase: React.FC<IJobSurfaceProps> = ({ navigate, id }) => {
  const { dispatch } = useJobContext()

  const handleDismiss = () => {
    if (navigate) {
      navigate('..')
    }
  }

  const handleExpand = () => {
    if (navigate) {
      navigate('/' + routes.job.basepath + '/' + id)
    }
  }

  const handleEdit = () => {
    dispatch(JobActions.setEditable(true))
  }

  const formikRef = useRef<FormikContextValue<JobValue>>(null)
  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm()
    }
  }

  const processSubmit = () => (values: JobValue) => {
    if (formikRef.current && formikRef.current.dirty) {
      dispatch(updateJob(values))
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
      <Suspense fallback={<JobSurfaceFallback />}>
        <HostQuery context={JobContext}>
          <Editable onSubmit={processSubmit} context={JobContext} formikRef={formikRef}>
            <JobProfile />
          </Editable>
        </HostQuery>
      </Suspense>
    </Surface>
  )
}

export const JobSurface: React.FC<IJobSurfaceProps> = ({ id, navigate }) => {
  if (!id) {
    console.error('JobSurface: No id provided')
    return null
  }

  return (
    <JobHostProvider initArg={{ id }}>
      <JobSurfaceBase id={id} navigate={navigate} />
    </JobHostProvider>
  )
}
