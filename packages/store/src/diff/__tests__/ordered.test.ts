import { comparePred } from '../ordered'

describe('ordered', () => {
  it('compare', () => {
    expect(comparePred('abc', 'abc')).toBeTruthy()
  })
})
