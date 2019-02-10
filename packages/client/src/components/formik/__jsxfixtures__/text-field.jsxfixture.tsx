import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { getLoLeafPath } from '../../../utils'
import { FormikTextField } from '../formik'

export const TextFieldFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const form = {
    firstName: 'jakub',
    lastName: 'wadas',
    position: 'developer',
  }

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
        <FormikTextField name={getLoLeafPath(form, 'firstName')} />
        <FormikTextField name={getLoLeafPath(form, 'lastName')} />
        <FormikTextField name={getLoLeafPath(form, 'position')} />
      </FormikProvider>
    </div>
  )
}

export default <TextFieldFixture />
