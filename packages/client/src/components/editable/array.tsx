import { ArrayHelpers, FieldArray, useFormikContext } from 'formik'
import React from 'react'
import { useEditableContext } from '.'

export interface IEditableFieldArrayRenderProps<Value> extends ArrayHelpers {
  name: string
  values: Value
  editable: boolean
}

export interface IEditableFieldArrayProps<Value> {
  children: (renderProps: IEditableFieldArrayRenderProps<Value>) => JSX.Element | JSX.Element[]
  name: string
}

/**
 * for runtime type safety of calling those by mistake (or late async) when non-editable mode
 */
const noopArrayHelpers: ArrayHelpers = {
  push: () => {
    /* noop */
  },
  handlePush: () => () => {
    /* noop */
  },
  swap: () => {
    /* noop */
  },
  handleSwap: () => () => {
    /* noop */
  },
  move: () => {
    /* noop */
  },
  handleMove: () => () => {
    /* noop */
  },
  insert: () => {
    /* noop */
  },
  handleInsert: () => () => {
    /* noop */
  },
  replace: () => {
    /* noop */
  },
  handleReplace: () => () => {
    /* noop */
  },
  unshift: () => 0,
  handleUnshift: () => () => {
    /* noop */
  },
  handleRemove: () => () => {
    /* noop */
  },
  handlePop: () => () => {
    /* noop */
  },
  remove: () => undefined,
  pop: () => undefined,
}

export type EditableFieldArrayI<T = any> = React.FC<IEditableFieldArrayProps<T>>

export const EditableFieldArray = <T extends any>({
  children,
  name,
}: IEditableFieldArrayProps<T>) => {
  const { values: editableValues } = useEditableContext()
  const { values: formikValues } = useFormikContext()

  if (formikValues) {
    return (
      <FieldArray name={name} validateOnChange={false}>
        {({ form, ...rest }) => children({ values: formikValues, editable: true, ...rest })}
      </FieldArray>
    )
  }

  if (editableValues) {
    return (
      <>{children({ name, values: editableValues as T, editable: false, ...noopArrayHelpers })}</>
    )
  }

  return null
}
