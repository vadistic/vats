import { useFormikContext } from 'formik'
import {
  BasePicker,
  IBasePickerProps,
  IBasePickerStyleProps,
  IBasePickerStyles,
  styled,
} from 'office-ui-fabric-react'
// tslint:disable-next-line: no-submodule-imports
import { getStyles } from 'office-ui-fabric-react/lib/components/pickers/BasePicker.styles'
import { ElementType, Omit } from '../../utils'
import { IFieldProps, mapFieldToPicker, PickerInjectedProps } from './formik'

export interface ICustomBasePickerProps<V> extends IBasePickerProps<V> {}

export class CustomBasePicker<V> extends BasePicker<V, ICustomBasePickerProps<V>> {
  inputComponentRef = this.input
}

export const CustomPicker = styled<
  ICustomBasePickerProps<any>,
  IBasePickerStyleProps,
  IBasePickerStyles
>(CustomBasePicker, getStyles, undefined, {
  scope: 'TagPicker',
})

export type FormikCustomPickerProps<V> = IFieldProps &
  Omit<ICustomBasePickerProps<ElementType<V>>, PickerInjectedProps>

export const FormikCustomPicker: React.FC<FormikCustomPickerProps<any[]>> = ({
  name,
  type,
  ...rest
}) => {
  const formik = useFormikContext<{ [name: string]: any[] }>()
  const field = formik.getFieldProps(name, type || 'select')
  return <CustomPicker {...rest} {...mapFieldToPicker<any>(field)} />
}
