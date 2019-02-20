import { FormikProvider, useFormik } from 'formik'
import React, { useContext } from 'react'
import { HostContext } from '../host'
import { normaliseFormikInitialValues, normaliseFormikPayload } from './normalise'

export interface IEditableProps {
  editable: boolean
  context: HostContext<any, any>
  onSubmit: (values: any) => void
}

// substitute formik context for non-editable mode
export const EditableContext = React.createContext({
  values: {},
})

export const useEditableContext = () => useContext(EditableContext)

export const Editable: React.FC<IEditableProps> = ({ context, onSubmit, ...rest }) => {
  const { value } = useContext(context)
  const { editable } = rest

  // !!! calling use memo here, somehow skips second render / values update after mutation
  const initialValues = normaliseFormikInitialValues(value)

  const handleSubmit = (payload: object) => {
    const normalisedPayload = normaliseFormikPayload(payload)
    onSubmit(normalisedPayload)
  }

  if (editable) {
    return <EnabledEditable values={initialValues} onSubmit={handleSubmit} {...rest} />
  }

  if (!editable) {
    return <DisabledEditable values={initialValues} onSubmit={handleSubmit} {...rest} />
  }

  // noop
  return null
}

export interface ISubEditableProps {
  values: any
  onSubmit: (values: any) => void
}

/*
 * Hack with disabled-enabled editable, because fromik@gamma does not handle reset consistently
 */
const EnabledEditable: React.FC<ISubEditableProps> = ({ values, onSubmit, children }) => {
  const formik = useFormik({ initialValues: values, onSubmit })

  return <FormikProvider value={formik}>{children}</FormikProvider>
}

const DisabledEditable: React.FC<ISubEditableProps> = ({ values, children }) => {
  return <EditableContext.Provider value={{ values }}>{children}</EditableContext.Provider>
}
