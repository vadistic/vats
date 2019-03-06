import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react'
import React from 'react'
import { useEditableContext } from '../editable'
import { FieldProps, useFormikTextField } from '../formik'
import { DisplayLabel } from './label'

export interface DisplayTextFieldOwnProps {
  fontSize?: keyof Theme['fonts']
}

export type DisplayTextFieldProps = FieldProps & ITextFieldProps & DisplayTextFieldOwnProps

export const DisplayTextField: React.FC<DisplayTextFieldProps> = ({
  name,
  fontSize = 'medium',
  multiline,
  ...rest
}) => {
  const { editable, value } = useEditableContext(name)
  const { bind } = useFormikTextField(name)

  const styles = (theme: Theme) => css`
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

    ${multiline
      ? css`
          textarea {
            color: inherit;
            ${theme.fonts[fontSize] as any};
            padding: 0;
          }
        `
      : css`
          input {
            color: inherit;
            ${theme.fonts[fontSize] as any};
            padding: 0;
          }
        `}
  `

  const renderLabel: DisplayTextFieldProps['onRenderLabel'] = props =>
    props && props.label ? <DisplayLabel text={props.label} {...props.iconProps} /> : null

  const sharedProps: Partial<DisplayTextFieldProps> = {
    autoComplete: 'off',
    resizable: false,
    multiline: false,
    borderless: !editable,
    underlined: editable,
    disabled: !editable,
  }

  const multilineProps: Partial<DisplayTextFieldProps> = {
    autoAdjustHeight: true,
    resizable: true,
    multiline: true,
  }

  const mergedProps = multiline ? { ...sharedProps, ...multilineProps } : sharedProps

  return (
    <TextField
      value={value}
      {...bind}
      css={styles}
      onRenderLabel={renderLabel}
      {...mergedProps}
      {...rest}
    />
  )
}
