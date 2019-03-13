import { RouteComponentProps } from '@reach/router'
import { Editable, FormikContextValue } from '@vats/forms'
import { StoreProvider, StoreStatus } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React, { useContext, useMemo, useRef } from 'react'
import { LoadingSpinner, Surface } from '../../components'
import { routes } from '../../routes'
import { CandidateProfile } from './profile'
import { createSingleCandidateStore, SingleCandidateContext, SingleCandidateValue } from './store'

export interface CandidateSurfaceProps extends RouteComponentProps {
  id?: string
}

const CandidateSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading candidate...'} />

export const CandidateSurfaceBase: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
  const store = useContext(SingleCandidateContext)

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

  const formikRef = useRef<FormikContextValue<SingleCandidateValue>>(null)

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm()
    }
  }

  const handleEdit = () => {
    store.state.editable = true
  }

  const processSubmit = (values: SingleCandidateValue) => {
    store.state.editable = false
    if (formikRef.current && formikRef.current.dirty) {
      store.autoUpdate(values)
    }
  }

  // refetch
  useMemo(() => {
    if (
      (!store.data.candidate && store.meta.status !== StoreStatus.init) ||
      (store.data.candidate && store.data.candidate.id !== id)
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
        {store.meta.status === StoreStatus.ready ? (
          <Editable
            onSubmit={processSubmit}
            values={store.data.candidate}
            editable={store.state.editable}
            formikRef={formikRef}
          >
            <CandidateProfile />
          </Editable>
        ) : (
          <CandidateSurfaceFallback />
        )}
      </Surface>
    ),
    'CandidateSurfaceBase',
  )
}

export const CandidateSurface: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
  if (!id) {
    console.error('CandidateSurface: No id provided')
    return null
  }

  return (
    <StoreProvider
      createStoreProps={{ id }}
      createStore={createSingleCandidateStore}
      context={SingleCandidateContext}
    >
      <CandidateSurfaceBase navigate={navigate} id={id} />
    </StoreProvider>
  )
}
