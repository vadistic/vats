import { css } from '@emotion/core'
import { TextField } from 'office-ui-fabric-react'
import { ITheme, styled } from '../../styles'
import { displayFieldFactory } from './factory'
import { FormikTextField, FormikTextFieldProps } from './formik'

export const DisplayTextFieldBase = displayFieldFactory<FormikTextFieldProps>({
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
