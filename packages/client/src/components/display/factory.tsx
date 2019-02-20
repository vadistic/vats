import { useFormikContext } from 'formik'
import React from 'react'
import { CSSProp } from '../../styles'
import { getInByPath, StrictReturnInterface } from '../../utils'
import { useEditableContext } from '../editable'
import { IFieldProps } from '../formik'

/*
 * > HOC-like factory for display fields
 *
 *  It's basically reimplemantation of `styled` function with few extras
 *
 * features:
 * - connect formik compatible components with editable context
 * - display (more) lightweight fallback component
 * - set defalut props
 * - css prop with props value (inversed styled)
 */

export interface IDisplayFieldFactoryCbProps {
  editable?: boolean
}

export interface IDisplayFieldFactoryOptions<Props, CallbackProps> {
  formikComponent: React.FC<Props>
  fallbackComponent: React.FC<any>
  fallbackValueProp: string
  // using this pattern allows precise control what props get passed down
  setProps: (props: Props & CallbackProps & IDisplayFieldFactoryCbProps) => Props
  cssProp?: (props: Props & CallbackProps & IDisplayFieldFactoryCbProps) => CSSProp
}

export const displayFieldFactory = <Props extends IFieldProps, CallbackProps = {}>({
  formikComponent,
  fallbackComponent,
  fallbackValueProp,
  setProps,
  cssProp,
}: IDisplayFieldFactoryOptions<Props, CallbackProps>) => {
  const FormikComponent = formikComponent
  const FallbackComponent = fallbackComponent

  const DisplayField = <P extends Props & CallbackProps>(props: P) => {
    const { values: formikValues } = useFormikContext()
    const { values: editableValues } = useEditableContext()

    const editable = !!formikValues

    const callbackProps = { editable, ...props }
    const { name, type } = props

    if (editable) {
      return (
        <FormikComponent
          name={name}
          type={type}
          css={cssProp ? cssProp(callbackProps) : undefined}
          {...setProps(callbackProps)}
        />
      )
    }

    if (!editable) {
      const value = getInByPath(editableValues, name)
      return (
        <FallbackComponent
          type={type}
          disabled={true}
          css={cssProp ? cssProp(callbackProps) : undefined}
          {...setProps(callbackProps)}
          {...{ [fallbackValueProp]: value }}
        />
      )
    }

    // noop
    return null
  }

  return DisplayField
}
