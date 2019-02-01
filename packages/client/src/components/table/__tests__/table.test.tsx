import React from 'react'
import { render } from 'react-testing-library'
import { TestWrapper } from '../../../utils/fixtures'
import { TableBasicFixture } from '../__jsxfixtures__/basic.jsxfixture'

it('renders without crashing', () => {
  const { asFragment } = render(
    <TestWrapper>
      <TableBasicFixture />
    </TestWrapper>,
  )

  expect(asFragment()).toMatchSnapshot()
})
