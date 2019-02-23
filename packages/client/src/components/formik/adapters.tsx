import { StringMap } from '@martin_hotell/rex-tils'
import {
  FormikComputedProps,
  FormikConfig,
  FormikHandlers,
  FormikHelpers,
  FormikRegistration,
  FormikSharedConfig,
  FormikState,
  useFormikContext,
} from 'formik'
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
  ITextFieldProps,
  IToggleProps,
  Rating,
  Slider,
  SpinButton,
  TextField,
  Toggle,
} from 'office-ui-fabric-react'
import React, { useEffect } from 'react'

/**
 * Based on this
 * https://github.com/kmees/formik-office-ui-fabric-react/tree/master/src
 *
 * ! use context instead of useField hook (broken validation in gamma and spams console)
 *
 * TODO: Make custom formik-validation for components missing it
 *
 */

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

export interface IFieldProps {
  name: string
  type?: string
}

export type UseField<V> = [IFieldSpreadProps<V>, IFieldMetaProps<V>]

export type FormikContextValue<State> = FormikSharedConfig &
  FormikState<State> &
  FormikHelpers<State> &
  FormikHandlers &
  FormikComputedProps<State> &
  FormikRegistration &
  Pick<FormikConfig<State>, 'validate' | 'validationSchema'>

type AdapterMap<BaseValue, FabricProps, InjectedKeys extends keyof FabricProps> = <
  V extends BaseValue
>(
  field: UseField<V>,
  formik: FormikContextValue<any>,
) => Pick<FabricProps, InjectedKeys>

export const createFakeEvent = ({ name }: { name: string }) => {
  return { target: { name } }
}

/*
 * ! seems unnecesary, but original formik components use this
 * leaving it just in case
 */
export const useRegisterFieldEffect = (formik: any, name: string) => {
  return useEffect(() => {
    console.log('field registerd')
    formik.registerField(name, {})

    return () => {
      console.log('field un-registerd')
      formik.unregisterField(name)
    }
  })
}

// ! why hook return type is inferred incorretly when I use variable insted of literal??
// leaving for documentation
const formikHookFallback = {
  formik: {},
  field: {},
  bind: {},
}

/*
 * TEXFIELD
 */

export type TextFieldInjectedPropNames = 'value' | 'onChange' | 'onBlur' | 'errorMessage'
export type TextFieldBaseValue = string

export const mapFieldToTextField: AdapterMap<
  TextFieldBaseValue,
  ITextFieldProps,
  TextFieldInjectedPropNames
> = ([field, fieldMeta], formik) => {
  return {
    ...field,
    errorMessage: fieldMeta.touch ? fieldMeta.error : undefined,
  }
}

export const useFormikTextField = <V extends TextFieldBaseValue = TextFieldBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'text')

    return {
      formik,
      field,
      bind: mapFieldToTextField(field, formik),
    }
  }

  return { formik: {}, field: {}, bind: {} }
}

export const FormikTextField: React.FC<ITextFieldProps & IFieldProps> = ({
  name,
  type,
  ...rest
}) => {
  const { bind } = useFormikTextField(name, type)

  return <TextField {...bind} {...rest} />
}

/*
 * TOGGLE
 */
export type ToggleInjectedPropNames = 'checked' | 'onChange' | 'onBlur'
export type ToggleBaseValue = boolean

export const mapFieldToToggle: AdapterMap<
  ToggleBaseValue,
  IToggleProps,
  ToggleInjectedPropNames
> = ([field, fieldMeta], formik) => {
  const handleChange: IToggleProps['onChange'] = (ev, checked) => {
    formik.setFieldValue(field.name, checked)
    field.onBlur(createFakeEvent(field))
  }

  return {
    onChange: handleChange,
    checked: field.value,
  }
}

export const useFormikToggle = <V extends ToggleBaseValue = ToggleBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'checkbox')

    return { formik, field, bind: mapFieldToToggle(field, formik) }
  }

  return { formik: {}, field: {}, bind: {} }
}

export const FormikToggle: React.FC<IToggleProps & IFieldProps> = ({ name, type, ...rest }) => {
  const { bind } = useFormikToggle(name, type)
  return <Toggle {...bind} {...rest} />
}

/*
 * CHECKBOX
 */
export type CheckboxInjectedPropNames = 'checked' | 'onChange' | 'onBlur'
export type ChecboxBaseValue = boolean

export const mapFieldToCheckbox: AdapterMap<
  ChecboxBaseValue,
  ICheckboxProps,
  CheckboxInjectedPropNames
> = ([field, fieldMeta], formik) => {
  const handleChange: ICheckboxProps['onChange'] = (ev, checked) => {
    formik.setFieldValue(field.name, checked)
    field.onBlur(createFakeEvent(field))
  }

  // add on blur?
  return {
    onChange: handleChange,
    checked: field.value,
  }
}

export const useFormikCheckbox = <V extends ChecboxBaseValue = ChecboxBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'checkbox')

    return { formik, field, bind: mapFieldToCheckbox(field, formik) }
  }

  return { formik: {}, field: {}, bind: {} }
}

export const FormikCheckbox: React.FC<ICheckboxProps & IFieldProps> = ({ name, type, ...rest }) => {
  const { bind } = useFormikCheckbox(name, type)
  return <Checkbox {...bind} {...rest} />
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

// ! stringified number
export type SpinButtonBaseValue = string

export const mapFieldToSpinButton = ({
  min = -Infinity,
  max = +Infinity,
  onIncrement,
  onDecrement,
  onValidate,
  step = 1,
}: ISpinButtonProps): AdapterMap<
  SpinButtonBaseValue,
  ISpinButtonProps,
  SpinButtonInjectedPropNames
> => ([field, fieldMeta], formik) => {
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

export const useFormikSpinButton = (props: ISpinButtonProps) => <
  V extends SpinButtonBaseValue = SpinButtonBaseValue
>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'number')
    return {
      formik,
      field,
      bind: mapFieldToSpinButton(props)(field, formik),
    }
  }

  return { formik: {}, field: {}, bind: {} }
}

export const FormikSpinButton: React.FC<ISpinButtonProps & IFieldProps> = ({
  name,
  type,
  ...rest
}) => {
  const { bind } = useFormikSpinButton(rest)(name, type)

  return <SpinButton {...bind} {...rest} />
}

/*
 * SLIDER
 */
export type SliderInjectedPropNames = 'value' | 'onChange' | 'onChanged'
export type SliderBaseValue = number

export const mapFieldToSlider: AdapterMap<
  SliderBaseValue,
  ISliderProps,
  SliderInjectedPropNames
> = ([field, fieldMeta], formik) => {
  const handleChange: ISliderProps['onChange'] = value => {
    formik.setFieldValue(field.name, value)
  }

  return {
    value: field.value,
    onChange: handleChange,
    onChanged: () => field.onBlur(createFakeEvent(field)),
  }
}

export const useFormikSlider = <V extends SliderBaseValue = SliderBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'range')

    return {
      formik,
      field,
      bind: mapFieldToSlider(field, formik),
    }
  }

  return { formik: {}, field: {}, bind: {} }
}

export const FormikSlider: React.FC<ISliderProps & IFieldProps> = ({ name, type, ...rest }) => {
  const { bind } = useFormikSlider(name, type)

  return <Slider {...bind} {...rest} />
}

/*
 * RATING
 */

export type RatingInjectedPropNames = 'rating' | 'onChange'
export type RatingBaseValue = number

export const mapFieldToRating: AdapterMap<
  RatingBaseValue,
  IRatingProps,
  RatingInjectedPropNames
> = ([field, fieldMeta], formik) => {
  const handleChange: IRatingProps['onChange'] = (ev, value) => {
    formik.setFieldValue(field.name, value)
    field.onBlur(createFakeEvent(field))
  }

  return {
    rating: field.value,
    onChange: handleChange,
  }
}

export const useFormikRating = <V extends RatingBaseValue = RatingBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'rating')

    return {
      formik,
      field,
      bind: mapFieldToRating(field, formik),
    }
  }

  return { formik: {}, field: {}, bind: {} }
}

export const FormikRating: React.FC<IRatingProps & IFieldProps> = ({ name, type, ...rest }) => {
  const { bind } = useFormikRating(name, type)
  return <Rating {...bind} {...rest} />
}

/*
 * CHOICEGROUP
 * ! it could also return ChoiceGroupOption object but a key seems like more sane approach
 */
export type ChoiceGroupInjectedPropNames = 'selectedKey' | 'onChange'
export type ChoiceGroupBaseValue = string

export const mapFieldToChoiceGroup: AdapterMap<
  ChoiceGroupBaseValue,
  IChoiceGroupProps,
  ChoiceGroupInjectedPropNames
> = ([field, fieldMeta], formik) => {
  const handleChange: IChoiceGroupProps['onChange'] = (ev, option) => {
    formik.setFieldValue(field.name, option ? option.key : null)
    field.onBlur(createFakeEvent(field))
  }

  return {
    selectedKey: field.value,
    onChange: handleChange,
  }
}

export const useFormikChoiceGroup = <V extends ChoiceGroupBaseValue = ChoiceGroupBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'radio')

    return {
      formik,
      field,
      bind: mapFieldToChoiceGroup(field, formik),
    }
  }

  return { formik: {}, field: {}, bind: {} }
}

export const FormikChoiceGroup: React.FC<IChoiceGroupProps & IFieldProps> = ({
  name,
  type,
  ...rest
}) => {
  const { bind } = useFormikChoiceGroup(name, type)

  return <ChoiceGroup {...bind} {...rest} />
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

export type DropdownBaseValue = string | number | string[] | number[]

export const mapFieldToDropdown: AdapterMap<
  DropdownBaseValue,
  IDropdownProps,
  DropdownInjectedPropNames
> = ([field, fieldMeta], formik) => {
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

export const useFormikDropdown = <V extends DropdownBaseValue = DropdownBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'select')

    return {
      formik,
      field,
      bind: mapFieldToDropdown(field, formik),
    }
  }
  return { formik: {}, field: {}, bind: {} }
}

export const FormikDropdown: React.FC<IDropdownProps & IFieldProps> = ({ name, type, ...rest }) => {
  const { bind } = useFormikDropdown(name, type)
  return <Dropdown {...bind} {...rest} />
}

/*
 * Base Picker
 */
export type PickerInjectedProps = 'selectedItems' | 'onChange' | 'onBlur'
export type PickerBaseValue = any[]

export const mapFieldToPicker: AdapterMap<any[], IBasePickerProps<any>, PickerInjectedProps> = (
  [field, fieldMeta],
  formik,
) => {
  const handleChange = (items: any[] | undefined) => {
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

export const useFormikPicker = <V extends PickerBaseValue = PickerBaseValue>(
  name: string,
  type?: string,
) => {
  const formik = useFormikContext<StringMap<V>>()

  if (formik && formik.values) {
    const field = formik.getFieldProps(name, type || 'select')

    return {
      formik,
      field,
      bind: mapFieldToPicker(field, formik),
    }
  }

  return { formik: {}, field: {}, bind: {} }
}
