import {
  BasePicker,
  IBasePickerProps,
  IBasePickerStyleProps,
  IBasePickerStyles,
  styled,
} from 'office-ui-fabric-react'
// tslint:disable-next-line: no-submodule-imports
import { getStyles } from 'office-ui-fabric-react/lib/components/pickers/BasePicker.styles'
import { ElementType } from '../../utils'
import { IFieldProps, useFormikPicker } from './adapters'

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

// leaving this interface because typing complex picker items is actually useful
export type FormikPickerProps<V> = IFieldProps & ICustomBasePickerProps<ElementType<V>>

export const FormikPicker: React.FC<FormikPickerProps<any[]>> = ({ name, type, ...rest }) => {
  const { bind } = useFormikPicker(name, type)

  return <CustomPicker {...bind} {...rest} />
}
