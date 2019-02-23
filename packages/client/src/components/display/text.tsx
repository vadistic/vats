import { css } from '@emotion/core'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react'
import { ITheme } from '../../styles'
import { useEditableContext } from '../editable'
import { IFieldProps, useFormikTextField } from '../formik'
import { DisplayLabel } from './label'

export interface IDisplayTextFieldOwnProps {
  fontSize?: keyof ITheme['fonts']
}

export type DisplayTextFieldProps = IFieldProps & ITextFieldProps & IDisplayTextFieldOwnProps

export const DisplayTextField: React.FC<DisplayTextFieldProps> = ({
  name,
  fontSize = 'medium',
  multiline,
  ...rest
}) => {
  const { editable, value } = useEditableContext(name)
  const { bind } = useFormikTextField(name)

  const styles = (theme: ITheme) => css`
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
