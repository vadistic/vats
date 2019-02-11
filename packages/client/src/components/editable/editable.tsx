import { FormikProvider, useFormik, useFormikContext } from 'formik'
import { TextField } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { getInByPath } from '../../utils'
import { FormikTextField, FormikTextFieldProps } from '../formik'
import { normaliseFormikInput, normaliseFormikResult as normaliseFormikPayload } from './normalise'

export interface IEditableProps {
  editable: boolean
  values: object
  onSubmit: (values: any) => void
}

// substitute formik context for non-editable mode
const EditableContext = React.createContext({
  values: {},
})

const useEditableContext = () => useContext(EditableContext)

/**
 * Editable component should:
 * - [x] provide formik context
 * - [x] provide replacement ctx when not editable
 * - [x] take data snapshot on edit start(via formik initValues)
 * - [x] change inital deep null values to undefined
 * - [x] change result array-like values to arrays
 * - take model (as subset of fields)
 */

export const Editable: React.FC<IEditableProps> = ({ values, onSubmit, ...rest }) => {
  const { editable } = rest
  const initialValues = useMemo(() => normaliseFormikInput(values), [values, editable])

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

export const DisplayTextField: React.FC<FormikTextFieldProps> = ({
  name,
  placeholder,
  ...rest
}) => {
  const { values: formikValues } = useFormikContext()
  const { values: editableValues } = useEditableContext()

  if (formikValues) {
    return (
      <FormikTextField
        name={name}
        placeholder={placeholder}
        // shared
        borderless={true}
        autoComplete="off"
        resizable={false}
        {...rest}
      />
    )
  }

  if (editableValues) {
    const value = getInByPath(editableValues, name)
    return (
      <TextField
        value={value}
        // shared
        borderless={true}
        autoComplete="off"
        resizable={false}
        disabled={true}
        {...rest}
      />
    )
  }

  // noop
  return null
}
