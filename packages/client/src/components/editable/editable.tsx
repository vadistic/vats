import { FormikProvider, useFormik } from 'formik'
import React, { useContext, useMemo, useState } from 'react'
import { HostContext, IHostContextValue } from '../host'
import { EditableContext } from './context'
import { normaliseFormikInitialValues, normaliseFormikPayload } from './normalise'

export interface IEditableProps {
  context: HostContext<any, any>
  onSubmit: (values: any) => void
  formikRef?: React.MutableRefObject<any>
}

export const Editable: React.FC<IEditableProps> = ({ context, onSubmit, formikRef, children }) => {
  const { value, state } = useContext<IHostContextValue<any, any>>(context)

  const editable = state.local.editable || false
  const safeValues = useMemo(() => normaliseFormikInitialValues(value), [value, state])

  const handleSubmit = (payload: object) => {
    const normalisedPayload = normaliseFormikPayload(payload)
    onSubmit(normalisedPayload)
  }

  const formik = useFormik<any>({ onSubmit: handleSubmit, initialValues: safeValues })

  if (formikRef) {
    formikRef.current = formik
  }

  /*
   * There's a tricky bug when host was left in dirty state and then candidate switched
   * sometimes, after switching to edit formik values would show previous candidate
   *
   * Seems (mostly) fixed by:
   * - not subsituting display fields with fabric on the last stage, but using hook formik adapter
   * - using flag to give react time for async dispatch
   * - returning null to force children to update
   * - providing empty formik value on editable switch
   *
   * but still happens :<
   */
  const [flag, setFlag] = useState(false)

  const shouldReset =
    (value && formik.values && value.id !== formik.values.id) || !value || !formik.values

  if (shouldReset) {
    if (!flag) {
      formik.resetForm(safeValues)
      setFlag(true)
    }

    return null
  } else {
    if (flag) {
      // for good measure
      formik.resetForm(safeValues)
      setFlag(false)
      return null
    }
  }

  return (
    <EditableContext.Provider value={{ values: safeValues, editable }}>
      <FormikProvider value={editable ? formik : ({} as any)} children={children} />
    </EditableContext.Provider>
  )
}
