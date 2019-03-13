import { RouteComponentProps } from '@reach/router'
import { Editable, FormikContextValue } from '@vats/forms'
import { StoreStatus, useStore } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React, { useRef } from 'react'
import { LoadingSpinner, Surface } from '../../components'
import { routes } from '../../routes'
import { JobProfile } from './profile'
import { createSingleJobStore, SingleJobValue } from './store'

export interface JobSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

export const JobSurface: React.FC<JobSurfaceProps> = ({ navigate, id }) => {
  if (!id) {
    console.error('JobSurface: No id provided')
    return null
  }

  const store = useStore(createSingleJobStore, { id }, [id])
  const formikRef = useRef<FormikContextValue<SingleJobValue>>(null)

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
    store.state.editable = true
  }

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm()
    }
  }

  const processSubmit = () => (values: SingleJobValue) => {
    store.state.editable = false
    if (formikRef.current && formikRef.current.dirty) {
      store.autoUpdate(values)
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
      {useObserver(() => {
        // ready
        if (store.meta.status === StoreStatus.ready && store.data.job) {
          return (
            <Editable
              onSubmit={processSubmit}
              values={store.data.job}
              editable={store.state.editable}
              formikRef={formikRef}
            >
              <JobProfile />
            </Editable>
          )
        }

        // not found
        if (store.meta.status === StoreStatus.ready && !store.data.job) {
          return <p>Job not found</p>
        }

        // loading
        if (
          store.meta.status === StoreStatus.init ||
          store.meta.status === StoreStatus.loading ||
          store.meta.status === StoreStatus.refetch
        ) {
          return <LoadingSpinner label={'Loading job...'} />
        }
      }, 'JobSurface')}
    </Surface>
  )
}
