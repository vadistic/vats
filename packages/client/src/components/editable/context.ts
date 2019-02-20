import { useFormikContext } from 'formik'
import React, { useContext, useState } from 'react'

export interface IEditablecontextValue<V = any> {
  values: V
}

// substitute formik context for non-editable mode
export const EditableContext = React.createContext<IEditablecontextValue>({
  values: undefined,
})

// hook to fluently switch values between editable and formik
export const useEditableContext = () => {
  const { values: formikValues } = useFormikContext()
  const { values: editableValues } = useContext(EditableContext)

  const editable = !!formikValues

  const values = editable ? formikValues : editableValues

  return { editable, values }
}
