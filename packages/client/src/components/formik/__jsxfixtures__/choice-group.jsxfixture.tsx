import { FormikProvider, useFormik } from 'formik'
import { IChoiceGroupOption } from 'office-ui-fabric-react'
import React from 'react'
import { getLoLeafPath } from '../../../utils'
import { FormikChoiceGroup } from '../formik'

const plainOptions: IChoiceGroupOption[] = [
  {
    key: 'A',
    text: 'Option A',
  },
  {
    key: 'B',
    text: 'Option B',
  },
  {
    key: 'C',
    text: 'Option C',
    disabled: true,
  },
  {
    key: 'D',
    text: 'Option D',
    disabled: true,
  },
]

export const ChoiceGroupFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const formik = useFormik({
    initialValues: {
      plain: 'A',
    },
    onSubmit,
  })

  console.log(formik.values)

  return (
    <div>
      <FormikProvider value={formik}>
        <form>
          <h3>ChoiceGroup</h3>
          <span>Plain</span>
          <FormikChoiceGroup
            name={getLoLeafPath(formik.initialValues, 'plain')}
            options={plainOptions}
          />
          {/* https://developer.microsoft.com/en-us/fabric#/components/choicegroup */}
          <span>TODO: ChoiceGroup with Dropdowns</span>
        </form>
      </FormikProvider>
    </div>
  )
}

export default <ChoiceGroupFixture />
