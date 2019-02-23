import { useFormikContext } from 'formik'
import React, { useContext, useState } from 'react'
import { getInByPath } from '../../utils'

export interface IEditablecontextValue<V = any> {
  values: V
  editable: boolean
}

// substitute formik context for non-editable mode
export const EditableContext = React.createContext<IEditablecontextValue>({
  values: undefined,
  editable: false,
})

// hook to fluently switch values between editable and formik
export const useEditableContext = (name?: string) => {
  const { values: formikValues } = useFormikContext()
  const { values: editableValues, editable } = useContext(EditableContext)

  const values = editable ? formikValues : editableValues

  const value = name ? getInByPath(values, name) : undefined

  return { editable, values, value }
}
