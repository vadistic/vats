import { sortValue, StoreSortDirection } from '../sort'

describe('sortValue', () => {
  const fixture = [
    {
      string: 'a',
      number: null,
      date: null,
    },
    {
      string: 'b',
      number: 1,
      date: null,
    },
    {
      string: 'A',
      number: null,
      date: '2015-11-02T13:57:31.123Z',
    },
    {
      string: 'B',
      number: 2,
      date: '2015-11-22T13:57:31.123Z',
    },
    {
      string: null,
      number: 1,
      date: null,
    },
    {
      string: null,
      number: null,
      date: '2015-11-22T13:57:31.123Z',
    },
  ]

  it('returns undefined of invalid sortBy', () => {
    expect(sortValue(fixture, 'random', StoreSortDirection.ascending)).toBeUndefined()
  })

  it('sorts by non-nested, nullable string (normalize to lowercase, then uppercase second?!)', () => {
    const sortedAsc = sortValue(fixture, 'string', StoreSortDirection.ascending)

    expect(sortedAsc).toEqual([
      {
        string: 'a',
        number: null,
        date: null,
      },
      {
        string: 'A',
        number: null,
        date: '2015-11-02T13:57:31.123Z',
      },
      {
        string: 'b',
        number: 1,
        date: null,
      },
      {
        string: 'B',
        number: 2,
        date: '2015-11-22T13:57:31.123Z',
      },
      {
        string: null,
        number: 1,
        date: null,
      },
      {
        string: null,
        number: null,
        date: '2015-11-22T13:57:31.123Z',
      },
    ])
  })

  it('puts nulls first when sorting by value in the descending order', () => {
    const sortedDesc = sortValue(fixture, 'string', StoreSortDirection.descending)

    expect(sortedDesc).toEqual([
      {
        string: null,
        number: 1,
        date: null,
      },
      {
        string: null,
        number: null,
        date: '2015-11-22T13:57:31.123Z',
      },
      {
        string: 'b',
        number: 1,
        date: null,
      },
      {
        string: 'B',
        number: 2,
        date: '2015-11-22T13:57:31.123Z',
      },
      {
        string: 'a',
        number: null,
        date: null,
      },
      {
        string: 'A',
        number: null,
        date: '2015-11-02T13:57:31.123Z',
      },
    ])
  })

  it('allow sorting with nested selector', () => {
    const nestedfixture = [
      {
        id: 1,
        nested: {
          moreNested: {
            number: 3,
          },
        },
      },
      {
        id: 2,
        nested: {
          moreNested: {
            number: 1,
          },
        },
      },
      {
        id: 3,
        nested: {
          moreNested: {
            number: null,
          },
        },
      },
      {
        id: 4,
        nested: {
          moreNested: {
            number: 2,
          },
        },
      },
    ]

    const sortedAsc = sortValue(
      nestedfixture,
      'nested.moreNested.number',
      StoreSortDirection.ascending,
    )

    expect(sortedAsc).toEqual([
      {
        id: 2,
        nested: {
          moreNested: {
            number: 1,
          },
        },
      },
      {
        id: 4,
        nested: {
          moreNested: {
            number: 2,
          },
        },
      },
      {
        id: 1,
        nested: {
          moreNested: {
            number: 3,
          },
        },
      },
      {
        id: 3,
        nested: {
          moreNested: {
            number: null,
          },
        },
      },
    ])
  })
})
