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
  const safeValues = useMemo(() => normaliseFormikInitialValues(value), [value, state])

  const handleSubmit = (payload: object) => {
    const normalisedPayload = normaliseFormikPayload(payload)
    onSubmit(normalisedPayload)
  }

  const formik = useFormik<any>({ onSubmit: handleSubmit, initialValues: safeValues })

  // HACK
  // BUT DO NOT TOUCH!!!

  /*
   * There's a tricky bug iwhen host was left dirty and then candidate switched
   * sometimes (every 2 or 10 or never, idk) after toggling edit again
   * the fields display previous dirty values...
   *
   * This is a hack, and it does not always work, but it's such a waste of time already :<
   */
  const [flag, setFlag] = useState(false)

  const shouldReset =
    (value && formik.values && value.id !== formik.values.id) || !value || !formik.values

  if (shouldReset) {
    console.log('Editable form reset')
    if (!flag) {
      formik.resetForm(safeValues)
      setFlag(true)
    }

    return null
  }

  if (flag && !shouldReset) {
    // for good measure
    formik.resetForm(safeValues)
    setFlag(false)

    return null
  }

  if (!editable) {
    return <EditableContext.Provider value={{ values: safeValues }} children={children} />
  } else {
    return <FormikProvider value={formik} children={children} />
  }
}
