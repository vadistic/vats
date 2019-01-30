import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { getLeafPath } from '../../../utils'
import { FormikCheckbox, FormikToggle } from '../formik'

export const BooleanPickersFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const form = {
    newsletter: true,
    spam: false,
    nested: {
      important: true,
      isWorking: false,
    },
  }

  const formik = useFormik({
    initialValues: form,
    onSubmit,
  })

  console.log(formik.values)

  return (
    <div>
      <FormikProvider value={formik}>
        <form>
          <h3>Checkbox</h3>
          <span>Plain</span>
          <FormikCheckbox name={getLeafPath(form, 'newsletter')} />
          <span>Nested</span>
          <FormikCheckbox name={getLeafPath(form, 'nested', 'important')} />
          <h3>Toggle</h3>
          <span>Plain</span>
          <FormikToggle name={getLeafPath(form, 'spam')} />
          <span>Nested</span>
          <FormikToggle name={getLeafPath(form, 'nested', 'isWorking')} />
        </form>
      </FormikProvider>
    </div>
  )
}

export default <BooleanPickersFixture />
