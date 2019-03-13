import { RouteComponentProps } from '@reach/router'
import { Editable, FormikContextValue } from '@vats/forms'
import { StoreProvider, StoreStatus } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React, { useContext, useMemo, useRef } from 'react'
import { LoadingSpinner, Surface } from '../../components'
import { routes } from '../../routes'
import { JobProfile } from './profile'
import { createSingleJobStore, SingleJobContext, SingleJobValue } from './store'

export interface JobSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

const JobSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading job...'} />

export const JobSurfaceBase: React.FC<JobSurfaceProps> = ({ navigate, id }) => {
  const store = useContext(SingleJobContext)

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

  const formikRef = useRef<FormikContextValue<SingleJobValue>>(null)

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

  // refetch
  useMemo(() => {
    if (
      (!store.data.job && store.meta.status !== StoreStatus.init) ||
      (store.data.job && store.data.job.id !== id)
    ) {
      store.refetch({ where: { id } })
    }
  }, [id])

  return useObserver(
    () => (
      <Surface
        navitationProps={{
          onDismiss: handleDismiss,
          onEdit: handleEdit,
          onSubmit: handleSubmit,
          onExpand: handleExpand,
        }}
      >
        {store.data.job && store.meta.status === StoreStatus.ready ? (
          <Editable
            onSubmit={processSubmit}
            values={store.data.job}
            editable={store.state.editable}
            formikRef={formikRef}
          >
            <JobProfile />
          </Editable>
        ) : (
          <JobSurfaceFallback />
        )}
      </Surface>
    ),
    'JobSurfaceBase',
  )
}

export const JobSurface: React.FC<JobSurfaceProps> = ({ id, navigate }) => {
  if (!id) {
    console.error('JobSurface: No id provided')
    return null
  }

  return (
    <StoreProvider
      createStoreProps={{ id }}
      createStore={createSingleJobStore}
      context={SingleJobContext}
    >
      <JobSurfaceBase id={id} navigate={navigate} />
    </StoreProvider>
  )
}
