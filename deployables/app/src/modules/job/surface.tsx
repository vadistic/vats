import { RouteComponentProps } from '@reach/router'
import { Editable, FormikContextValue } from '@vats/forms'
import React, { Suspense, useRef } from 'react'
import { HostQuery, LoadingSpinner, Surface } from '../../components'
import { routes } from '../../routes'
import { JobActions, JobContext, JobHostProvider, JobValue, useJobContext } from './host'
import { JobProfile } from './profile'
import { updateJob } from './thunks'

export interface JobSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

const JobSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading job...'} />

export const JobSurfaceBase: React.FC<JobSurfaceProps> = ({ navigate, id }) => {
  const { dispatch, state, value } = useJobContext()

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
          <Editable
            onSubmit={processSubmit}
            values={value}
            editable={state.local.editable}
            formikRef={formikRef}
          >
            <JobProfile />
          </Editable>
        </HostQuery>
      </Suspense>
    </Surface>
  )
}

export const JobSurface: React.FC<JobSurfaceProps> = ({ id, navigate }) => {
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
