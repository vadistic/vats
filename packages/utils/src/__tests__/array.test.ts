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

    // benchmark

    // needs "test --react" flag for window.performance.now()
    // RESULT:
    // splicing 4-8 times faster^^
    // but splicing needs slice for copy, not spread or all advantage disapear

    /*
    const genSimpleArray = (length: number) =>
      Array.from({ length }, () => Math.floor(Math.random() * 100))

    const partial = {
      id: '123',
      __typename: 'ABC',
      someNull: null,
      someArray: [123, 123, 123],
    }

    const genComplexArray = (length: number) =>
      Array.from({ length }, () => ({
        ...partial,
        arr: [partial, partial, partial, partial],
        nested: {
          ...partial,
          nestedArr: [partial, partial, partial, partial],
          moreNested: {
            ...partial,
          },
        },
      }))

    const runSimple = (fn: typeof move, times: number) => {
      const arr = genSimpleArray(times)

      for (let i = 0; i < times; i++) {
        const from = Math.floor(Math.random() * 100)
        const to = Math.floor(Math.random() * 100)

        fn(arr, from, to)
      }
    }

    const runComplex = (fn: typeof move, times: number) => {
      const arr = genComplexArray(times)

      for (let i = 0; i < times; i++) {
        const from = Math.floor(Math.random() * 100)
        const to = Math.floor(Math.random() * 100)

        fn(arr, from, to)
      }
    }
    ;[10, 100, 1000, 10000].forEach(n => {
      const tSlice0 = window.performance.now()
      runSimple(moveElementSlice, n)
      const tSlice1 = window.performance.now()

      const tSplice0 = window.performance.now()
      runSimple(moveElement, n)
      const tSplice1 = window.performance.now()

      console.log('simple: splice', tSplice1 - tSplice0)
      console.log('simple: slice', tSlice1 - tSlice0)
    })
    ;[10, 100, 1000, 10000].forEach(n => {
      const tSlice0 = window.performance.now()
      runComplex(moveElementSlice, n)
      const tSlice1 = window.performance.now()

      const tSplice0 = window.performance.now()
      runComplex(moveElement, n)
      const tSplice1 = window.performance.now()

      console.log('complex: splice', tSplice1 - tSplice0)
      console.log('complex: slice', tSlice1 - tSlice0)
    }) */
  })
})
