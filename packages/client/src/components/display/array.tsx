import { ArrayHelpers, FieldArray, useFormikContext } from 'formik'
import React from 'react'
import { useEditableContext } from '../editable'

export interface IDisplayFieldArrayRenderProps<Value> extends ArrayHelpers {
  name: string
  values: Value
  editable: boolean
}

export interface IDisplayFieldArrayProps<Value> {
  children: (renderProps: IDisplayFieldArrayRenderProps<Value>) => JSX.Element | JSX.Element[]
  name: string
}

/**
 * for runtime type safety of calling those by mistake when non-editable mode
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

export type DisplayFieldArrayI<T = any> = React.FC<IDisplayFieldArrayProps<T>>

export const DisplayFieldArray = <T extends any>({
  children,
  name,
}: IDisplayFieldArrayProps<T>) => {
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
