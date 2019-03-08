import { useTranslation } from '@vats/i18n'
import React from 'react'
import { EditableFieldArray } from '../editable'
import { FieldProps } from '../formik'
import { DisplayActionButton, DisplayIconButton } from './button'
import { DisplayLabel, DisplayLabelProps } from './label'
import { DisplayTextField, DisplayTextFieldProps } from './text'

interface DisplayTextFieldArrayProps extends FieldProps {
  emptyElement: any
  labelProps?: DisplayLabelProps
  textFieldProps?: DisplayTextFieldProps
}

export const DisplayTextFieldArray: React.FC<DisplayTextFieldArrayProps> = ({
  name,
  type,
  emptyElement,
  labelProps,
  textFieldProps,
}: DisplayTextFieldArrayProps) => {
  const { tp } = useTranslation()

  return (
    <EditableFieldArray<{ [index: string]: any[] }> name={name}>
      {({ values, handleRemove, handlePush, editable }) => {
        const isArrEmpty = values[name].length === 0
        const lastNotEmpty = !!values[name].slice(-1)[0]

        const renderRemoveButton = (index: number) => () =>
          editable ? (
            <DisplayIconButton iconProps={{ iconName: 'remove' }} onClick={handleRemove(index)} />
          ) : null

        return (
          <>
            {labelProps && <DisplayLabel {...labelProps} />}
            {values[name].map((_, i) => (
              <DisplayTextField
                key={name + '_' + i}
                fontSize="medium"
                name={[name, i].join('.')}
                type={type}
                onRenderSuffix={renderRemoveButton(i)}
                {...textFieldProps}
              />
            ))}
            {editable && (isArrEmpty || lastNotEmpty) && (
              <DisplayActionButton
                iconProps={{ iconName: 'add' }}
                text={tp.action.add()}
                onClick={handlePush(emptyElement)}
              />
            )}
          </>
        )
      }}
    </EditableFieldArray>
  )
}
