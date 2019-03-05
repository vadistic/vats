import { action } from '@storybook/addon-actions'
import { storiesOf, StoryDecorator } from '@storybook/react'
import { pathProxy } from '@vats/utils'
import { Form, FormikProvider, useFormik } from 'formik'
import { Fabric, initializeIcons } from 'office-ui-fabric-react'
import React from 'react'
import { FormikCheckbox, FormikToggle } from '../adapters'

const form = {
  newsletter: true,
  spam: false,
  nested: {
    important: true,
    isWorking: false,
  },
}

initializeIcons()

const withProvider: StoryDecorator = story => {
  const Provider: React.FC = () => {
    const onSubmit = action('submit')

    const formik = useFormik({
      initialValues: form,
      onSubmit,
    })

    return (
      <Fabric>
        <FormikProvider value={formik}>
          <Form>
            {story()}
            <button style={{ marginTop: '20px' }} onClick={() => void formik.submitForm()}>
              Submit
            </button>
          </Form>
        </FormikProvider>
      </Fabric>
    )
  }

  return <Provider />
}

const p = pathProxy<typeof form>()

storiesOf('formik-fabric', module)
  .addDecorator(withProvider)
  .add('checkbox', () => (
    <>
      <FormikCheckbox name={p.newsletter.PATH} onChange={action('onChange')} />
    </>
  ))
  .add('checkbox nested', () => (
    <>
      <FormikCheckbox name={p.nested.important.PATH} onChange={action('onChange')} />
    </>
  ))
  .add('toggle', () => (
    <>
      <FormikToggle name={p.spam.PATH} onChange={action('onChange')} />
    </>
  ))
  .add('toggle nested', () => (
    <>
      <FormikToggle name={p.nested.isWorking.PATH} onChange={action('onChange')} />
    </>
  ))
