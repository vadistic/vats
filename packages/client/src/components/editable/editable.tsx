import { FormikProvider, useFormik } from 'formik'
import React, { useContext, useMemo, useState } from 'react'
import { HostContext, IHostContextValue } from '../host'
import { EditableContext } from './context'
import { normaliseFormikInitialValues, normaliseFormikPayload } from './normalise'

export interface IEditableProps {
  context: HostContext<any, any>
  onSubmit: (values: any) => void
}

export const Editable: React.FC<IEditableProps> = ({ context, onSubmit, children }) => {
  const { value, state, dispatch } = useContext<IHostContextValue<any, any>>(context)

  const editable = state.local.editable || false
  const safeValues = normaliseFormikInitialValues(value)

  const handleSubmit = (payload: object) => {
    const normalisedPayload = normaliseFormikPayload(payload)
    onSubmit(normalisedPayload)
  }

  const formik = useFormik<any>({ onSubmit: handleSubmit, initialValues: safeValues })

  // HACK
  // BUT DO NOT TOUCH!!!
  const [flag, setFlag] = useState(false)

  if (value && formik.values && value.id !== formik.values.id) {
    if (!flag) {
      formik.resetForm(safeValues)
      setFlag(true)
    }

    return <p>This is not visible</p>
  } else {
    // tslint:disable-next-line: no-unused-expression
    flag && setFlag(false)
  }

  if (editable) {
    return <FormikProvider value={formik} children={children} />
  }

  if (!editable) {
    return <EditableContext.Provider value={{ values: safeValues }} children={children} />
  }

  return null
}
