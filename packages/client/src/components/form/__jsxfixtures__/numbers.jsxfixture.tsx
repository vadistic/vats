import { FormikProvider, useFormik } from 'formik'
// tslint:disable-next-line:no-submodule-imports
import { Position } from 'office-ui-fabric-react/lib/utilities/positioning'
import React from 'react'
import { FormikRating, FormikSlider, FormikSpinButton } from '../formik'

export const NumbersPickersFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const formik = useFormik({
    initialValues: {
      cats: 23,
      dogs: {
        small: 30,
        large: 5,
      },

      howLovely: 3,
      howNice: 5,

      rateIt: 3,
    },
    onSubmit,
  })

  console.log(formik.values)

  return (
    <div>
      <FormikProvider value={formik}>
        <form>
          <h3>SpinButton</h3>
          <span>Plain</span>
          <FormikSpinButton name="cats" label="cats" labelPosition={Position.end} />
          <span>Nested value</span>
          <FormikSpinButton name="dogs.small" label="small dogs" labelPosition={Position.end} />
          <span>Custom min/max/step</span>
          <FormikSpinButton
            name="dogs.large"
            label="large dogs"
            labelPosition={Position.end}
            min={2}
            max={28}
            step={4}
          />

          <h3>Slider</h3>
          <span>Plain</span>
          <FormikSlider name="howLovely" />
          <span>Custom min/max/step</span>
          <FormikSlider name="howNice" min={3} max={75} step={4} />

          <h3>Rating</h3>
          <span>Plain</span>
          <FormikRating name="rateIt" />
        </form>
      </FormikProvider>
    </div>
  )
}

export default <NumbersPickersFixture />
