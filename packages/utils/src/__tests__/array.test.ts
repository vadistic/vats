import { moveElement } from '../array'

describe('array utils', () => {
  it('moveElement', () => {
    const fixture = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100))

    // splicing from SO as comparator^^
    const move = (arr: any[], from: number, to: number) => {
      const copy = arr.slice()
      copy.splice(to, 0, copy.splice(from, 1)[0])
      return copy
    }

    // from < to
    expect(moveElement(fixture, 2, 12)).toEqual(move(fixture, 2, 12))
    // from > to
    expect(moveElement(fixture, 14, 7)).toEqual(move(fixture, 14, 7))
  })
})
