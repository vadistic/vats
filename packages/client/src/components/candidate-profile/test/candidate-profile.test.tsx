import React from 'react'
// tslint:disable-next-line:no-implicit-dependencies
import { render } from 'react-testing-library'

import { FixtureWrapper } from '../../fixture/wrapper'
import { CandidateProfileFixture } from './fixture'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const { asFragment } = render(
    <FixtureWrapper>
      <CandidateProfileFixture />
    </FixtureWrapper>,
  )

  expect(asFragment()).toMatchSnapshot()
})
