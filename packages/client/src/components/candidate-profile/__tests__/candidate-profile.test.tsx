import React from 'react'
import { render } from 'react-testing-library'
import { TestWrapper } from '../../../utils/fixtures'
import { CandidateProfileBasicFixture } from '../__jsxfixtures__/basic.jsxfixture'

it('renders without crashing', () => {
  const { asFragment } = render(
    <TestWrapper>
      <CandidateProfileBasicFixture />
    </TestWrapper>,
  )

  expect(asFragment()).toMatchSnapshot()
})
