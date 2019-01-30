import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { FormikCheckbox, FormikToggle } from '../formik'

export const BooleanPickersFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const formik = useFormik({
    initialValues: {
      newsletter: true,
      spam: false,
      nested: {
        important: true,
        isWorking: false,
      },
    },
    onSubmit,
  })

  console.log(formik.values)

  return (
    <div>
      <FormikProvider value={formik}>
        <form>
          <h3>Checkbox</h3>
          <span>Plain</span>
          <FormikCheckbox name="newsletter" />
          <span>Nested</span>
          <FormikCheckbox name="nested.important" />
          <h3>Toggle</h3>
          <span>Plain</span>
          <FormikToggle name="spam" />
          <span>Nested</span>
          <FormikToggle name="nested.isWorking" />
        </form>
      </FormikProvider>
    </div>
  )
}

export default <BooleanPickersFixture />
