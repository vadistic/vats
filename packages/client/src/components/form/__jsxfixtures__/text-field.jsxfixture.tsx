import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { FormikTextField } from '../formik'

export const TextFieldFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const formik = useFormik({
    initialValues: {
      firstName: 'jakub',
      lastName: 'wadas',
      position: 'developer',
    },
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
        <FormikTextField name="firstName" />
        <FormikTextField name="lastName" />
        <FormikTextField name="position" />
      </FormikProvider>
    </div>
  )
}

export default <TextFieldFixture />
