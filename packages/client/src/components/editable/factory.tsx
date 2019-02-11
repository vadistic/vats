import { useFormikContext } from 'formik'
import React from 'react'
import { getInByPath } from '../../utils'
import { useEditableContext } from './editable'

export interface IDisplayFieldBaseProps {
  name: string
  placeholder?: string
}

export interface IDisplayFieldFactoryOptions<Props extends IDisplayFieldBaseProps> {
  props: Partial<Props>
  formikComponent: React.FC<any>
  fallbackComponent: React.FC<any>
  fallbackValueProp: string
}

export const displayFieldFactory = <Props extends IDisplayFieldBaseProps>({
  props,
  formikComponent,
  fallbackComponent,
  fallbackValueProp,
}: IDisplayFieldFactoryOptions<Props>) => {
  const FormikComponent = formikComponent
  const FallbackComponent = fallbackComponent

  const DisplayField: React.FC<Props> = ({ name, placeholder, ...rest }) => {
    const { values: formikValues } = useFormikContext()
    const { values: editableValues } = useEditableContext()

    if (formikValues) {
      return <FormikComponent name={name} placeholder={placeholder} {...props} {...rest} />
    }

    if (editableValues) {
      const value = getInByPath(editableValues, name)
      return (
        <FallbackComponent disabled={true} {...{ [fallbackValueProp]: value, ...props, ...rest }} />
      )
    }

    // noop
    return null
  }

  return DisplayField
}
