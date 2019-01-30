import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { getLeafPath } from '../../../utils'
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
        <FormikTextField name={getLeafPath(form, 'firstName')} />
        <FormikTextField name={getLeafPath(form, 'lastName')} />
        <FormikTextField name={getLeafPath(form, 'position')} />
      </FormikProvider>
    </div>
  )
}

export default <TextFieldFixture />
