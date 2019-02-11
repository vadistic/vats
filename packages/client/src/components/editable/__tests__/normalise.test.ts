import { normaliseFormikInput } from '../normalise'
import fixture from './normalise.fixture.json'

it('normaliseFormikInput convers nulls to undefined', () => {
  const result = normaliseFormikInput(fixture)

  console.log(result)

  // handle empty array
  expect(result.emails).toEqual([])
  // handle non-empty array
  expect(result.phones).toEqual(['123 123 123', '123 123 123'])

  // convert non nested null to undefined
  expect(result.company).toBe(undefined)

  // converts nested null to undefined
  expect(result.tags[0].description).toBe(undefined)
})
