import { pathProxy } from '@vats/utils'
import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { FormikCheckbox, FormikToggle } from '../adapters'

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

  const p = pathProxy<typeof form>()

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
          <FormikCheckbox name={p.newsletter.PATH} />
          <span>Nested</span>
          <FormikCheckbox name={p.nested.important.PATH} />
          <h3>Toggle</h3>
          <span>Plain</span>
          <FormikToggle name={p.spam.PATH} />
          <span>Nested</span>
          <FormikToggle name={p.nested.isWorking.PATH} />
        </form>
      </FormikProvider>
    </div>
  )
}

export default <BooleanPickersFixture />
