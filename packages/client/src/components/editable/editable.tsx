import { FormikProvider, useFormik, useFormikContext } from 'formik'
import { TextField } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { getInByPath } from '../../utils'
import { FormikTextField, FormikTextFieldProps } from './formik'
import { normaliseFormikInitialValues, normaliseFormikPayload } from './normalise'

export interface IEditableProps {
  editable: boolean
  values: object
  onSubmit: (values: any) => void
}

// substitute formik context for non-editable mode
export const EditableContext = React.createContext({
  values: {},
})

export const useEditableContext = () => useContext(EditableContext)

export const Editable: React.FC<IEditableProps> = ({ values, onSubmit, ...rest }) => {
  const { editable } = rest
  const initialValues = useMemo(() => normaliseFormikInitialValues(values), [values, editable])

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

/*
 * Hack with disabled-enabled editable, because fromik@gamma does not handle reset consistently
 */
const EnabledEditable: React.FC<IEditableProps> = ({ values, onSubmit, children, editable }) => {
  const formik = useFormik({ initialValues: values, onSubmit })

  return <FormikProvider value={formik}>{children}</FormikProvider>
}

const DisabledEditable: React.FC<IEditableProps> = ({ values, onSubmit, children, editable }) => {
  return <EditableContext.Provider value={{ values }}>{children}</EditableContext.Provider>
}
