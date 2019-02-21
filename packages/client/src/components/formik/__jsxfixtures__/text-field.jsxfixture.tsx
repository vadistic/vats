import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { pathProxy } from '../../../utils'
import { FormikTextField } from '../adapters'

export const TextFieldFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const form = {
    firstName: 'jakub',
    lastName: 'wadas',
    position: 'developer',
  }

  const p = pathProxy<typeof form>()

  const formik = useFormik({
    initialValues: form,
    validate: values => {
      return {
        firstName: values.firstName.length < 3 && 'Too short',
      }
    },
    onSubmit,
  })

  console.log(formik.values)

  return (
    <div>
      <FormikProvider value={formik}>
        <FormikTextField name={p.firstName.PATH} />
        <FormikTextField name={p.lastName.PATH} />
        <FormikTextField name={p.position.PATH} />
      </FormikProvider>
    </div>
  )
}

export default <TextFieldFixture />
