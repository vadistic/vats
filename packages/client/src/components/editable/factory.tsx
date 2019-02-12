import { useFormikContext } from 'formik'
import React from 'react'
import { CSSProp } from '../../styles'
import { getInByPath } from '../../utils'
import { useEditableContext } from './editable'

/* @doc displayFieldFactory
 *
 * > HOC-like factory for display fields
 *
 * features:
 * - connect formik compatible components with editable context
 * - display (more) lightweight fallback component
 * - set defalut props
 * - css prop with props value (inversed styled)
 *
 * ideas:
 *  - connect with i18n for auto labeling
 */

export interface IDisplayFieldBaseProps {
  name: string
  placeholder?: string
}

export interface IDisplayFieldStylingProps {
  editable?: boolean
}

export interface IDisplayFieldFactoryOptions<Props extends IDisplayFieldBaseProps> {
  formikComponent: React.FC<any>
  fallbackComponent: React.FC<any>
  fallbackValueProp: string
  defaultProps: (props: Props & IDisplayFieldStylingProps) => Partial<Props>
  cssProp?: (props: Props & IDisplayFieldStylingProps) => CSSProp
}

export const displayFieldFactory = <Props extends IDisplayFieldBaseProps>({
  defaultProps,
  formikComponent,
  fallbackComponent,
  fallbackValueProp,
  cssProp,
}: IDisplayFieldFactoryOptions<Props>) => {
  const FormikComponent = formikComponent
  const FallbackComponent = fallbackComponent

  const DisplayField: React.FC<Props> = props => {
    const { values: formikValues } = useFormikContext()
    const { values: editableValues } = useEditableContext()

    const editable = !!formikValues

    // removing name & placeholdre from fallback component
    const { name, placeholder, ...rest } = props

    const stylingProps = { ...props, editable }

    if (editable) {
      return (
        <FormikComponent
          name={name}
          placeholder={placeholder}
          css={cssProp ? cssProp(stylingProps) : undefined}
          {...defaultProps(stylingProps)}
          {...rest}
        />
      )
    }

    if (!editable) {
      const value = getInByPath(editableValues, name)
      return (
        <FallbackComponent
          disabled={true}
          css={cssProp ? cssProp(stylingProps) : undefined}
          {...defaultProps(stylingProps)}
          {...{ [fallbackValueProp]: value }}
          {...rest}
        />
      )
    }

    // noop
    return null
  }

  return DisplayField
}
