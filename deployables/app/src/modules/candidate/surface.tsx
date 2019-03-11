import { RouteComponentProps } from '@reach/router'
import { Editable, FormikContextValue } from '@vats/forms'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import React, { useContext, useMemo, useRef } from 'react'
import { LoadingSpinner, Surface } from '../../components'
import { routes } from '../../routes'
import { StoreProvider, StoreStatus } from '../../store'
import { CandidateValue } from './host'
import { CandidateProfile } from './profile'
import { CandidateContext, createCandidateStore } from './store'

export interface CandidateSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

const CandidateSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading candidate...'} />

export const CandidateSurfaceBase: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
  const store = useContext(CandidateContext)

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
    store.state.editable = true
  }

  const processSubmit = (values: CandidateValue) => {
    store.state.editable = false
    if (formikRef.current && formikRef.current.dirty) {
      store.autoUpdate({
        candidate: values,
      })
    }
  }

  // refetch
  useMemo(() => {
    if (
      (!store.data.candidate && store.meta.status !== StoreStatus.init) ||
      (store.data.candidate && id !== store.data.candidate.id)
    ) {
      store.refetch({ where: { id } })
    }
  }, [id])

  return useObserver(() => (
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
          values={toJS(store.data.candidate)}
          editable={store.state.editable}
          formikRef={formikRef}
        >
          <CandidateProfile />
        </Editable>
      ) : (
        <CandidateSurfaceFallback />
      )}
    </Surface>
  ))
}

export const CandidateSurface: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
  if (!id) {
    console.error('CandidateSurface: No id provided')
    return null
  }

  return (
    <StoreProvider
      createStoreProps={{ id }}
      createStore={createCandidateStore}
      context={CandidateContext}
    >
      <CandidateSurfaceBase navigate={navigate} id={id} />
    </StoreProvider>
  )
}
