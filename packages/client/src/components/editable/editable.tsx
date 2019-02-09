import { FormikProvider, useFormik, useFormikContext } from 'formik'
import { TextField } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { getInByPath } from '../../utils'
import { FormikTextField, FormikTextFieldProps } from '../formik'

export interface IEditableProps {
  editable: boolean
  initialValues: object
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
 * - [?] take data snapshot (via formik initValues)
 * - take model (as subset of fields)
 * - render lightweigth markup as replacemnts when not editable mode
 */
export const Editable: React.FC<IEditableProps> = ({
  initialValues,
  editable,
  onSubmit,
  children,
}) => {
  if (!editable) {
    return (
      <EditableContext.Provider value={{ values: initialValues }}>
        {children}
      </EditableContext.Provider>
    )
  }

  if (editable) {
    const handleSubmit = (values: object) => {
      onSubmit(values)
    }

    const formik = useFormik({ initialValues, onSubmit: handleSubmit })

    useMemo(() => {
      formik.resetForm(initialValues)
    }, [initialValues])

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
