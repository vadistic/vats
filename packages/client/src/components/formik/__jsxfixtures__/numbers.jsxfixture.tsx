import { FormikProvider, useFormik } from 'formik'
// tslint:disable-next-line:no-submodule-imports
import { Position } from 'office-ui-fabric-react/lib/utilities/positioning'
import React from 'react'
import { getLoLeafPath } from '../../../utils'
import { FormikRating, FormikSlider, FormikSpinButton } from '../adapters'

export const NumbersPickersFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const form = {
    cats: 23,
    dogs: {
      small: 30,
      large: 5,
    },

    howLovely: 3,
    howNice: 5,

    rateMe: 3,
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
          <h3>SpinButton</h3>
          <span>Plain</span>
          <FormikSpinButton
            name={getLoLeafPath(form, 'cats')}
            label="cats"
            labelPosition={Position.end}
          />
          <span>Nested value</span>
          <FormikSpinButton
            name={getLoLeafPath(form, 'dogs', 'small')}
            label="small dogs"
            labelPosition={Position.end}
          />
          <span>Custom min/max/step</span>
          <FormikSpinButton
            name={getLoLeafPath(form, 'dogs', 'large')}
            label="large dogs"
            labelPosition={Position.end}
            min={2}
            max={28}
            step={4}
          />

          <h3>Slider</h3>
          <span>Plain</span>
          <FormikSlider name={getLoLeafPath(form, 'howLovely')} />
          <span>Custom min/max/step</span>
          <FormikSlider name={getLoLeafPath(form, 'howNice')} min={3} max={75} step={4} />

          <h3>Rating</h3>
          <span>Plain</span>
          <FormikRating name={getLoLeafPath(form, 'rateMe')} />
        </form>
      </FormikProvider>
    </div>
  )
}

export default <NumbersPickersFixture />
