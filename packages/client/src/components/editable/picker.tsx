import { useFormikContext } from 'formik'
import {
  BasePicker,
  IBasePickerProps,
  IBasePickerStyleProps,
  IBasePickerStyles,
  ITag,
  ITagItemProps,
  styled,
  TagItem,
  TagItemSuggestion,
} from 'office-ui-fabric-react'
// tslint:disable-next-line: no-submodule-imports
import { getStyles } from 'office-ui-fabric-react/lib/components/pickers/BasePicker.styles'
import { ElementType, Omit } from '../../utils'
import { CandidateValue } from '../candidate/host'
import { IFieldProps, mapFieldToTagPicker, PickerInjectedProps } from './formik'

export interface ICustomBasePickerProps<V> extends IBasePickerProps<V> {}

export class CustomBasePicker<V> extends BasePicker<V, ICustomBasePickerProps<V>> {
  inputComponentRef = this.input
}

type TagsValue = NonNullable<CandidateValue['tags']>
type SingleTagValue = ElementType<TagsValue>

export const CustomTagPicker = styled<
  ICustomBasePickerProps<SingleTagValue>,
  IBasePickerStyleProps,
  IBasePickerStyles
>(CustomBasePicker, getStyles, undefined, {
  scope: 'TagPicker',
})

export type FormikCustomTagPickerProps = IFieldProps &
  Omit<ICustomBasePickerProps<SingleTagValue>, PickerInjectedProps>

export const FormikCustomTagPicker: React.FC<FormikCustomTagPickerProps> = ({
  name,
  type,
  ...rest
}) => {
  const formik = useFormikContext<{ [name: string]: any[] }>()
  const field = formik.getFieldProps(name, type || 'select')
  return <CustomTagPicker {...rest} {...mapFieldToTagPicker<TagsValue>(field)} />
}
