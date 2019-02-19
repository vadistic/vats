import { css } from '@emotion/core'
import { IIconProps, ITextFieldProps, TextField } from 'office-ui-fabric-react'
import { ITheme } from '../../styles'
import { FormikTextField, FormikTextFieldProps } from '../formik'
import { displayFieldFactory } from './factory'
import { DisplayLabel } from './label'

export interface IDisplayTextFieldCbProps {
  fontSize?: keyof ITheme['fonts']
  labelIconProps?: IIconProps
}

export type DisplayTextFieldProps = FormikTextFieldProps & IDisplayTextFieldCbProps

export const DisplayTextField = displayFieldFactory<DisplayTextFieldProps>({
  fallbackComponent: TextField,
  formikComponent: FormikTextField,
  fallbackValueProp: 'value',
  defaultProps: ({ editable }) => ({
    borderless: !editable,
    underlined: editable,
    autoComplete: 'off',
    resizable: false,
    multiline: false,
    onRenderLabel: props =>
      props && props.label ? <DisplayLabel text={props.label} {...props.iconProps} /> : null,
  }),
  cssProp: ({ fontSize = 'medium' as 'medium', editable }) => (theme: ITheme) => css`
    .ms-TextField-wrapper {
      /* fix editable bottom border height */
      margin-bottom: ${editable && `-1px`};

      /* display flex in edit mode - may br temp bug */
      display: block;
    }

    .ms-TextField-fieldGroup {
      background-color: inherit;
      min-height: ${theme.sizes.s3};
      height: auto;
    }

    .ms-TextField-suffix {
      background-color: inherit;
    }

    input {
      ${theme.fonts[fontSize] as any};
      padding: 0;
    }
  `,
})

export const MultilineDisplayTextField = displayFieldFactory<
  FormikTextFieldProps & IDisplayTextFieldCbProps
>({
  fallbackComponent: TextField,
  formikComponent: FormikTextField,
  fallbackValueProp: 'value',
  defaultProps: ({ editable }) => ({
    borderless: !editable,
    underlined: editable,
    autoComplete: 'off',
    autoAdjustHeight: true,
    resizable: true,
    multiline: true,
    onRenderLabel: props =>
      props && props.label ? <DisplayLabel text={props.label} {...props.iconProps} /> : null,
  }),
  cssProp: ({ fontSize = 'medium' as 'medium', editable }) => (theme: ITheme) => css`
    .ms-TextField-wrapper {
      /* fix editable bottom border height */
      margin-bottom: ${editable && `-1px`};

      /* display flex in edit mode - may br temp bug */
      display: block;
    }

    .ms-TextField-fieldGroup {
      background-color: inherit;
    }

    textarea {
      ${theme.fonts[fontSize] as any};
      padding: 0;
    }
  `,
})
