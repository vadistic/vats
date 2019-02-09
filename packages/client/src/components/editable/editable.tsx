import { FormikProvider, useFormik, useFormikContext } from 'formik'
import { TextField } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { getInByPath } from '../../utils'
import { FormikTextField, FormikTextFieldProps } from '../formik'
import { normaliseFormikInput, normaliseFormikResult } from './normalise'

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
export const Editable: React.FC<IEditableProps> = ({ values, editable, onSubmit, children }) => {
  const initialValues = useMemo(() => normaliseFormikInput(values), [values])

  const handleSubmit = (payload: object) => {
    onSubmit(normaliseFormikResult(payload))
  }

  const formik = useFormik({ initialValues, onSubmit: handleSubmit })

  // reset form on value change (but not editable)
  useMemo(() => {
    formik.resetForm(initialValues)
  }, [values])

  if (!editable) {
    return (
      <EditableContext.Provider value={{ values: initialValues }}>
        {children}
      </EditableContext.Provider>
    )
  }

  if (editable) {
    return <FormikProvider value={formik}>{children}</FormikProvider>
  }

  // noop
  return null
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
    // TODO: map to nice replacmenet components (or maybe use fabric input components but without formik?)
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
