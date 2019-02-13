import { css } from '@emotion/core'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react'
import { ITheme } from '../../styles'
import { displayFieldFactory } from './factory'
import { FormikTextField, FormikTextFieldProps } from './formik'

const handleRenderLabel = (props: ITextFieldProps | undefined) => {
  if (!props || !props.label) {
    return null
  }

  return <h4>{props.label}</h4>
}

export interface IDisplayTextFieldStylingProps {
  fontSize?: keyof ITheme['fonts']
}

export const DisplayTextField = displayFieldFactory<
  FormikTextFieldProps & IDisplayTextFieldStylingProps
>({
  fallbackComponent: TextField,
  formikComponent: FormikTextField,
  fallbackValueProp: 'value',
  defaultProps: ({ editable }) => ({
    borderless: !editable,
    underlined: editable,
    autoComplete: 'off',
    resizable: false,
    multiline: false,
    onRenderLabel: handleRenderLabel,
  }),
  cssProp: ({ fontSize = 'medium' as 'medium', editable }) => theme => css`
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
  FormikTextFieldProps & IDisplayTextFieldStylingProps
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
    onRenderLabel: handleRenderLabel,
  }),
  cssProp: ({ fontSize = 'medium' as 'medium', editable }) => theme => css`
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
