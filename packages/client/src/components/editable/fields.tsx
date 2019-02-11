import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import { TextField } from 'office-ui-fabric-react'
import React from 'react'
import { CSSProp, ITheme, styled } from '../../styles'
import { getInByPath } from '../../utils'
import { useEditableContext } from './editable'
import { FormikTextField, FormikTextFieldProps } from './formik'

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

const DisplayTextFieldBase = displayFieldFactory<FormikTextFieldProps>({
  fallbackComponent: TextField,
  formikComponent: FormikTextField,
  fallbackValueProp: 'value',
  props: {
    borderless: true,
    autoComplete: 'off',
    resizable: false,
  },
})

export interface InjectedDisplayTextFieldProps {
  fontSize?: keyof ITheme['fonts']
}

export const DisplayTextField = styled<typeof DisplayTextFieldBase, InjectedDisplayTextFieldProps>(
  DisplayTextFieldBase,
)(
  ({ theme }) => css`
    .ms-TextField-fieldGroup {
      background-color: inherit;
      min-height: ${theme.sizes.s3};
      height: auto;
    }
  `,
  ({ theme, fontSize = 'medium' as 'medium' }) =>
    css`
      input {
        ${theme.fonts[fontSize] as any};
      }
    `,
)
