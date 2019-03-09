import { RouteComponentProps } from '@reach/router'
import { Editable, FormikContextValue } from '@vats/forms'
import { HostProvider, useHostAutoUpdate, useHostQuery } from '@vats/host'
import React, { useMemo, useRef } from 'react'
import { LoadingSpinner, Surface } from '../../components'
import { routes } from '../../routes'
import { candidateHost, CandidateValue } from './host'
import { CandidateProfile } from './profile'

export interface CandidateSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

const CandidateSurfaceFallback: React.FC = () => <LoadingSpinner label={'Loading candidate...'} />

export const CandidateSurfaceBase: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
  const {
    data,
    state,
    status,
    dispatchActions: { updateState, setVariables },
  } = useHostQuery(candidateHost, {
    variables: {
      where: { id },
    },
  })

  const autoUpdate = useHostAutoUpdate(candidateHost)

  useMemo(() => {
    setVariables({
      where: {
        id,
      },
    })
  }, [id])

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
    updateState(s => (s.editable = true))
  }

  const processSubmit = async (values: CandidateValue) => {
    updateState(s => (s.editable = false))
    if (formikRef.current && formikRef.current.dirty) {
      autoUpdate({
        candidate: values,
      })
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
      {(status === 'READY' || status === 'MUTATE') && data.candidate ? (
        <Editable
          onSubmit={processSubmit}
          values={data.candidate}
          editable={state.editable}
          formikRef={formikRef}
        >
          <CandidateProfile />
        </Editable>
      ) : (
        <CandidateSurfaceFallback />
      )}
    </Surface>
  )
}

export const CandidateSurface: React.FC<CandidateSurfaceProps> = ({ navigate, id }) => {
  if (!id) {
    console.error('CandidateSurface: No id provided')
    return null
  }

  return (
    <HostProvider host={candidateHost}>
      <CandidateSurfaceBase navigate={navigate} id={id} />
    </HostProvider>
  )
}
