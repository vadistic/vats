import { css } from '@emotion/core'
import { TextField } from 'office-ui-fabric-react'
import { i18next, TranslationKeys, useTranslation } from '../../i18n'
import { ITheme } from '../../styles'
import { getInByPath } from '../../utils'
import { useEditableContext } from '../editable'
import { FormikTextField, FormikTextFieldProps } from '../formik'
import { DisplayLabel } from './label'

export interface IDisplayTextFieldOwnProps {
  fontSize?: keyof ITheme['fonts']
  intlProps?: {
    root: TranslationKeys
    path?: string
    options?: i18next.TOptions
  }
}

export type DisplayTextFieldProps = FormikTextFieldProps & IDisplayTextFieldOwnProps

export const DisplayTextField: React.FC<DisplayTextFieldProps> = ({
  name,
  fontSize = 'medium',
  multiline,
  intlProps,
  placeholder,
  ...rest
}) => {
  const { editable, values } = useEditableContext()
  const { t } = useTranslation()

  const value = getInByPath(values, name)

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

  const _placeholder =
    placeholder ||
    (intlProps && t([intlProps.root, intlProps.path || name].join('.'), intlProps.options)) ||
    undefined

  const sharedProps: Partial<DisplayTextFieldProps> = {
    placeholder: _placeholder,
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

  const finalProps = multiline ? { ...sharedProps, ...multilineProps } : sharedProps

  return editable ? (
    <FormikTextField
      name={name}
      css={styles}
      onRenderLabel={renderLabel}
      {...finalProps}
      {...rest}
    />
  ) : (
    <TextField value={value} css={styles} onRenderLabel={renderLabel} {...finalProps} {...rest} />
  )
}
