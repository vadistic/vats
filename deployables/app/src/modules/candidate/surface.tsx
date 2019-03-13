import { RouteComponentProps } from '@reach/router'
import { Editable, FormikContextValue } from '@vats/forms'
import { StoreStatus, useStore } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React, { useRef } from 'react'
import { LoadingSpinner, Surface } from '../../components'
import { routes } from '../../routes'
import { CandidateProfile } from './profile'
import { createSingleCandidateStore, SingleCandidateContext, SingleCandidateValue } from './store'

export interface CandidateSurfaceProps extends RouteComponentProps {
  id?: string
}

export const CandidateSurface: React.FC<CandidateSurfaceProps> = ({ navigate, id = '' }) => {
  if (!id) {
    console.error('CandidateSurface: No id provided')
    return null
  }

  const store = useStore(createSingleCandidateStore, { id }, [id])
  const formikRef = useRef<FormikContextValue<SingleCandidateValue>>(null)

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

  return (
    <SingleCandidateContext.Provider value={store}>
      <Surface
        navitationProps={{
          onDismiss: handleDismiss,
          onEdit: handleEdit,
          onSubmit: handleSubmit,
          onExpand: handleExpand,
        }}
      >
        {useObserver(() => {
          // render ready
          if (store.meta.status === StoreStatus.ready && store.data.candidate) {
            return (
              <Editable
                onSubmit={processSubmit}
                values={store.data.candidate}
                editable={store.state.editable}
                formikRef={formikRef}
              >
                <CandidateProfile />
              </Editable>
            )
          }

          // render loading
          if (
            store.meta.status === StoreStatus.init ||
            store.meta.status === StoreStatus.loading ||
            store.meta.status === StoreStatus.refetch
          ) {
            return <LoadingSpinner label={'Loading candidate...'} />
          }

          // render not found
          if (store.meta.status === StoreStatus.ready && !store.data.candidate) {
            return <p>Candidate not found :(</p>
          }

          // render error
          if (store.meta.status === StoreStatus.error) {
            return <p>Error occured</p>
          }
        }, 'CandidateSurface')}
      </Surface>
    </SingleCandidateContext.Provider>
  )
}
