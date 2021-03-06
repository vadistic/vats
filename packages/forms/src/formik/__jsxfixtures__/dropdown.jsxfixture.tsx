import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import { FormikProvider, useFormik } from 'formik'
import { DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react'
import React from 'react'
import { FormikDropdown } from '../adapters'

const options: IDropdownOption[] = [
  { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
  { key: 'A', text: 'Option a', title: 'I am option a.' },
  { key: 'B', text: 'Option b' },
  { key: 'C', text: 'Option c', disabled: true },
  { key: 'D', text: 'Option d' },
  { key: 'E', text: 'Option e' },
  { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
  { key: 'F', text: 'Option f' },
  { key: 'G', text: 'Option g' },
  { key: 'H', text: 'Option h' },
  { key: 'I', text: 'Option i' },
  { key: 'J', text: 'Option j' },
]

const dropdownFixtureStyles = (theme: Theme) => css`
  width: ${theme.sizes.m};
`

export const DropdownFixture: React.FC = () => {
  const onSubmit = () => {
    // noop
  }

  const form = {
    single: undefined,
    multi: [],
  }

  const formik = useFormik({
    initialValues: form,
    onSubmit,
  })

  return (
    <div css={dropdownFixtureStyles}>
      <FormikProvider value={formik}>
        <form>
          <h3>Dropdown</h3>
          <span>Single select</span>
          <FormikDropdown name={'single'} options={options} />
          <span>Multi select</span>
          <FormikDropdown name={'multi'} options={options} />
        </form>
      </FormikProvider>
    </div>
  )
}

export default <DropdownFixture />
