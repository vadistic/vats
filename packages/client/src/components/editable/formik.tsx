/**
 * Based on this
 * https://github.com/kmees/formik-office-ui-fabric-react/tree/master/src
 *
 * ! use context instead of useField hook (broken validation in gamma and spams console)
 *
 * TODO: Make custom formik-validation for components missing it
 *
 * TODO: Implement all components
 *   - ColorPicker
 *   - DatePicker
 *   - PeoplePicker
 *   - SwatchColorPicker
 */

import { useFormik, useFormikContext } from 'formik'
import {
  Checkbox,
  ChoiceGroup,
  Dropdown,
  IBasePickerProps,
  ICheckboxProps,
  IChoiceGroupProps,
  IDropdownProps,
  IRatingProps,
  ISliderProps,
  ISpinButtonProps,
  ITag,
  ITextFieldProps,
  IToggleProps,
  Rating,
  Slider,
  SpinButton,
  TagPicker,
  TextField,
  Toggle,
} from 'office-ui-fabric-react'
import React from 'react'
import { ElementType, Omit } from '../../utils'
import { CustomTagPicker, ICustomBasePickerProps } from './picker'

export interface IFieldSpreadProps<V> {
  value: V
  name: string
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: (e: any) => void
}

export interface IFieldMetaProps<V> {
  value: V
  error?: string | undefined
  touch: boolean
  initialValue?: V
}

export type UseField<V = any> = [IFieldSpreadProps<V>, IFieldMetaProps<V>]

export type Formik = ReturnType<typeof useFormik>

export interface IFieldProps {
  name: string
  type?: string
}

export const createFakeEvent = ({ name }: { name: string }) => {
  return { target: { name } }
}

/*
 * TEXFIELD
 */

export type TextFieldInjectedPropNames = 'value' | 'onChange' | 'onBlur' | 'errorMessage'

export const mapFieldToTextField = <V extends string>([field, fieldMeta]: UseField<V>): Pick<
  ITextFieldProps,
  TextFieldInjectedPropNames
> => {
  return {
    ...field,
    errorMessage: fieldMeta.touch ? fieldMeta.error : undefined,
  }
}

export type FormikTextFieldProps = IFieldProps & Omit<ITextFieldProps, TextFieldInjectedPropNames>

export const FormikTextField: React.FC<FormikTextFieldProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext()
  const field = formik.getFieldProps(name, type || 'text')
  return <TextField {...rest} {...mapFieldToTextField(field)} />
}

/*
 * TOGGLE
 */
export type ToggleInjectedPropNames = 'checked' | 'onChange' | 'onBlur'

export const mapFieldToToggle = <V extends boolean>([field, fieldMeta]: UseField<V>): Pick<
  IToggleProps,
  ToggleInjectedPropNames
> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const handleChange: IToggleProps['onChange'] = (ev, checked) => {
    formik.setFieldValue(field.name, checked)
    field.onBlur(createFakeEvent(field))
  }
  return {
    onChange: handleChange,
    checked: field.value,
  }
}

export type FormikToggleProps = IFieldProps & Omit<IToggleProps, ToggleInjectedPropNames>

export const FormikToggle: React.FC<FormikToggleProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext()
  const field = formik.getFieldProps(name, type || 'checkbox')
  return <Toggle {...rest} {...mapFieldToToggle(field)} />
}

/*
 * CHECKBOX
 */
export type CheckboxInjectedPropNames = 'checked' | 'onChange' | 'onBlur'

export const mapFieldToCheckbox = <V extends boolean>([field, fieldMeta]: UseField<V>): Pick<
  ICheckboxProps,
  CheckboxInjectedPropNames
> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const handleChange: ICheckboxProps['onChange'] = (ev, checked) => {
    formik.setFieldValue(field.name, checked)
    field.onBlur(createFakeEvent(field))
  }

  return {
    onChange: handleChange,
    checked: field.value,
  }
}

export type FormikCheckboxProps = IFieldProps & Omit<ICheckboxProps, CheckboxInjectedPropNames>

export const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext<{ [name: string]: boolean }>()
  const field = formik.getFieldProps(name, type || 'checkbox')
  return <Checkbox {...rest} {...mapFieldToCheckbox(field)} />
}

/*
 * SPINBUTTON
 */
export type SpinButtonInjectedPropNames =
  | 'value'
  | 'onIncrement'
  | 'onDecrement'
  | 'onValidate'
  | 'onBlur'

export const mapFieldToSpinButton = <V extends string>(
  [field, fieldMeta]: UseField<V>,
  {
    min = -Infinity,
    max = +Infinity,
    onIncrement,
    onDecrement,
    onValidate,
    step = 1,
  }: ISpinButtonProps,
): Pick<ISpinButtonProps, SpinButtonInjectedPropNames> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const handleIncrement: ISpinButtonProps['onIncrement'] = (value: string) => {
    const newValue = onIncrement ? onIncrement(value) : Math.min(max, +value + step)

    formik.setFieldValue(field.name, newValue)
    field.onBlur(createFakeEvent(field))

    return `${newValue}`
  }
  const handleDecrement: ISpinButtonProps['onDecrement'] = (value: string) => {
    const newValue = onDecrement ? onDecrement(value) : Math.max(min, +value - step)

    formik.setFieldValue(field.name, newValue)
    field.onBlur(createFakeEvent(field))

    return `${newValue}`
  }

  const handleValidate: ISpinButtonProps['onValidate'] = (value: string) => {
    const newValue = onValidate ? onValidate(value) : +value

    formik.setFieldValue(field.name, newValue)

    return `${newValue}`
  }

  return {
    value: field.value,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onValidate: handleValidate,
    onBlur: () => field.onBlur(createFakeEvent(field)),
  }
}

export type FromikSpinButtonProps = IFieldProps &
  Omit<ISpinButtonProps, SpinButtonInjectedPropNames>

export const FormikSpinButton: React.FC<FromikSpinButtonProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext<{ [name: string]: number }>()
  const field = formik.getFieldProps(name, type || 'number')
  return <SpinButton {...rest} {...mapFieldToSpinButton(field, rest)} />
}

/*
 * SLIDER
 */
export type SliderInjectedPropNames = 'value' | 'onChange' | 'onChanged'

export const mapFieldToSlider = <V extends number>([field, fieldMeta]: UseField<V>): Pick<
  ISliderProps,
  SliderInjectedPropNames
> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const handleChange: ISliderProps['onChange'] = value => {
    formik.setFieldValue(field.name, value)
  }

  return {
    value: field.value,
    onChange: handleChange,
    onChanged: () => field.onBlur(createFakeEvent(field)),
  }
}

export type FormikSliderProps = IFieldProps & Omit<ISliderProps, SliderInjectedPropNames>

export const FormikSlider: React.FC<FormikSliderProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext<{ [name: string]: number }>()
  const field = formik.getFieldProps(name, type || 'range')
  return <Slider {...rest} {...mapFieldToSlider(field)} />
}

/*
 * RATING
 */

export type RatingInjectedPropNames = 'rating' | 'onChange'

export const mapFieldToRating = <V extends number>([field, fieldMeta]: UseField<V>): Pick<
  IRatingProps,
  RatingInjectedPropNames
> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const handleChange: IRatingProps['onChange'] = (ev, value) => {
    formik.setFieldValue(field.name, value)
    field.onBlur(createFakeEvent(field))
  }

  return {
    rating: field.value,
    onChange: handleChange,
  }
}

export type FormikRatingProps = IFieldProps & Omit<IRatingProps, RatingInjectedPropNames>

export const FormikRating: React.FC<IFieldProps & IRatingProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext<{ [name: string]: number }>()
  const field = formik.getFieldProps(name, type || 'rating')
  return <Rating {...rest} {...mapFieldToRating(field)} />
}

/*
 * CHOICEGROUP
 * ! it could also return ChoiceGroupOption object but a key seems like more sane approach
 */
export type ChoiceGroupInjectedPropNames = 'selectedKey' | 'onChange'

export const mapFieldToChoiceGroup = <V extends string>([field, fieldMeta]: UseField<V>): Pick<
  IChoiceGroupProps,
  ChoiceGroupInjectedPropNames
> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const handleChange: IChoiceGroupProps['onChange'] = (ev, option) => {
    formik.setFieldValue(field.name, option ? option.key : null)
    field.onBlur(createFakeEvent(field))
  }

  return {
    selectedKey: field.value,
    onChange: handleChange,
  }
}

export type FormikChoiceGroupProps = IFieldProps &
  Omit<IChoiceGroupProps, ChoiceGroupInjectedPropNames>

export const FormikChoiceGroup: React.FC<FormikChoiceGroupProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext<{ [name: string]: string }>()
  const field = formik.getFieldProps(name, type || 'radio')
  return <ChoiceGroup {...rest} {...mapFieldToChoiceGroup(field)} />
}

/*
 * DROPDOWN
 */

export type DropdownInjectedPropNames =
  | 'selectedKey'
  | 'selectedKeys'
  | 'onDismiss'
  | 'onChange'
  | 'errorMessage'
  | 'multiSelect'

export const mapFieldToDropdown = <V extends string | number | string[] | number[]>([
  field,
  fieldMeta,
]: UseField<V>): Pick<IDropdownProps, DropdownInjectedPropNames> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const multiSelect = Array.isArray(field.value)

  const handleSingleChange: IDropdownProps['onChange'] = (ev, option) => {
    formik.setFieldValue(field.name, option ? option.key : null)
  }

  const handleMultiChange: IDropdownProps['onChange'] = (ev, option) => {
    const keys = field.value as string[] // | number[] but tslib's filter cannot comprehend it :<
    if (option) {
      if (option.selected) {
        formik.setFieldValue(field.name, [...keys, option.key])
      } else {
        formik.setFieldValue(field.name, keys.filter(key => key !== option.key))
      }
    }
  }

  const handleDissmiss: IDropdownProps['onDismiss'] = () => field.onBlur(createFakeEvent(field))

  const errorMessage = fieldMeta.error

  if (Array.isArray(field.value)) {
    return {
      multiSelect,
      selectedKeys: field.value,
      errorMessage,
      onChange: handleMultiChange,
      onDismiss: handleDissmiss,
    }
  } else {
    return {
      selectedKey: field.value,
      errorMessage,
      onChange: handleSingleChange,
      onDismiss: handleDissmiss,
    }
  }
}

export type FormikDropdownProps = IFieldProps & Omit<IDropdownProps, DropdownInjectedPropNames>

export const FormikDropdown: React.FC<FormikDropdownProps> = ({ name, type, ...rest }) => {
  const formik = useFormikContext<{ [name: string]: string }>()
  const field = formik.getFieldProps(name, type || 'select')
  return <Dropdown {...rest} {...mapFieldToDropdown(field)} />
}

/*
 * Base Picker
 */
export type PickerInjectedProps = 'selectedItems' | 'onChange' | 'onBlur'

export type FormikPickerProps<V extends any[]> = IFieldProps &
  Omit<IBasePickerProps<ElementType<V>>, PickerInjectedProps>

export const mapFieldToTagPicker = <V extends any[]>([field, fieldMeta]: UseField<V>): Pick<
  IBasePickerProps<ElementType<V>>,
  PickerInjectedProps
> => {
  const formik = useFormikContext<{ [name: string]: V }>()

  const handleChange = (items: Array<ElementType<V>> | undefined) => {
    formik.setFieldValue(field.name, items ? items : null)
    field.onBlur(createFakeEvent(field))
  }

  return {
    selectedItems: field.value,
    onChange: handleChange,
    // ! maybe not needed
    onBlur: () => field.onBlur(createFakeEvent(field)),
  }
}

export const FormikTagPicker: React.FC<FormikPickerProps<ITag[]>> = ({ name, type, ...rest }) => {
  const formik = useFormikContext<{ [name: string]: ITag[] }>()
  const field = formik.getFieldProps(name, type || 'select')
  return <TagPicker {...rest} {...mapFieldToTagPicker<ITag[]>(field)} />
}
