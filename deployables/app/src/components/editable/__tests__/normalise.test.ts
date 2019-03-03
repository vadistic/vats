import { normaliseFormikInitialValues, normaliseFormikPayload } from '../normalise'
import fixture from './normalise.fixture.json'

it('normaliseFormikInitialValues() convers nulls to undefined', () => {
  const result = normaliseFormikInitialValues(fixture)

  // handle empty array
  expect(result.emails).toEqual([])
  // handle non-empty array
  expect(result.phones).toEqual(['123 123 123', '123 123 123'])

  // convert non nested null to undefined
  expect(result.company).toBe(undefined)
  // converts nested null to undefined
  expect(result.tags[0].description).toBe(undefined)
})

it('normaliseFormikPayload() convers undefined back to nulls', () => {
  const result = normaliseFormikInitialValues(fixture)
  const reversed = normaliseFormikPayload(result)

  expect(reversed).toEqual(fixture)
})
