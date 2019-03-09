import { FormikProvider, useFormik } from 'formik'
import React, { useMemo, useState } from 'react'
import { EditableContext } from './context'
import { normaliseFormikInitialValues, normaliseFormikPayload } from './normalise'

export interface EditableProps {
  values: any
  editable: boolean
  onSubmit: (values: any) => void
  formikRef?: React.MutableRefObject<any>
}

export const Editable: React.FC<EditableProps> = ({
  values,
  editable,
  onSubmit,
  formikRef,
  children,
}) => {
  const normalisedValues = useMemo(() => normaliseFormikInitialValues(values), [values])

  const handleSubmit = (payload: object) => {
    const normalisedPayload = normaliseFormikPayload(payload)
    onSubmit(normalisedPayload)
  }

  const formik = useFormik<any>({ onSubmit: handleSubmit, initialValues: normalisedValues })

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
    (values && formik.values && 'id' in values && values.id !== formik.values.id) ||
    !values ||
    !formik.values

  if (shouldReset) {
    if (!flag) {
      formik.resetForm(normalisedValues)
      setFlag(true)
    }

    return null
  } else {
    if (flag) {
      // for good measure
      formik.resetForm(normalisedValues)
      setFlag(false)
      return null
    }
  }

  return (
    <EditableContext.Provider value={{ values: normalisedValues, editable }}>
      <FormikProvider value={editable ? formik : ({} as any)} children={children} />
    </EditableContext.Provider>
  )
}
