import React from 'react'
import { useTranslation } from '../../i18n'
import { Box } from '../box'
import { EditableFieldArray } from '../editable'
import { IFieldProps } from '../formik'
import { DisplayActionButton, DisplayIconButton } from './button'
import { DisplayLabel, IDisplayLabelProps } from './label'
import { DisplayTextField, DisplayTextFieldProps } from './text'

interface IDisplayTextFieldArrayProps extends IFieldProps {
  emptyElement: any
  labelProps?: IDisplayLabelProps
  textFieldProps?: DisplayTextFieldProps
}

export const DisplayTextFieldArray: React.FC<IDisplayTextFieldArrayProps> = ({
  name,
  type,
  emptyElement,
  labelProps,
  textFieldProps,
}: IDisplayTextFieldArrayProps) => {
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
            {labelProps && (
              <Box direction="row">
                <DisplayLabel {...labelProps} />
              </Box>
            )}
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
