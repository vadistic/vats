import { insertElOnIndex, literally } from '@vats/utils'
import { cloneDeep } from 'apollo-utilities'
import { updateDiff, UpdateDiffOptions } from '..'

const fixtureFields = {
  id: '123',
  createdAt: '123',
  updatedAt: '123',
  scalarString: 'hello',
  scalarNumber: 21,
  scalarBoolean: true,
  scalarNull: null,
  scalarArrayStrings: ['hello', 'new', 'world'],
  scalarArrayNumbers: [1, 2, 3],
}

const fixture = {
  __typename: 'fixture',
  ...fixtureFields,
  // ! this one sneaks through validation, but there is not such graphql data structure
  trickyArray: [[1, 2], [2, 3]],
  empty: null,
  oneToOne: {
    __typename: 'oneToOne',
    ...fixtureFields,
    oneToOneToOne: {
      __typename: 'oneToOneToOne',
      ...fixtureFields,
    },
    oneToOneToMany: [
      {
        __typename: 'onetoOneToMany',
        ...fixtureFields,
      },
      {
        __typename: 'onetoOneToMany',
        ...fixtureFields,
      },
    ],
  },
  oneToMany: [
    {
      __typename: 'oneToMany',
      ...fixtureFields,
      id: '1',
    },
    {
      __typename: 'oneToMany',
      ...fixtureFields,
      id: '2',
    },
  ],
}

describe('oneToMany', () => {
  let copy = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (opts?: UpdateDiffOptions) => updateDiff(fixture, copy, opts)

  it('append', () => {
    const element = {
      ...fixture.oneToMany[1],
      __typename: 'abc',
      id: 'new_elem_1',
    }

    copy.oneToMany.push(element)

    const map = literally({
      oneToMany: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toEqual({
      oneToMany: [...fixture.oneToMany, element],
    })

    expect(updateData).toEqual({
      oneToMany: {
        connect: [
          {
            id: 'new_elem_1',
          },
        ],
      },
    })
  })

  it('insert', () => {
    const element = {
      ...fixture.oneToMany[1],
      __typename: 'abc',
      id: 'new_elem_1',
    }

    copy.oneToMany = insertElOnIndex(copy.oneToMany, 0, element)

    const map = literally({
      oneToMany: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toEqual({
      oneToMany: [element, ...fixture.oneToMany],
    })

    expect(updateData).toEqual({
      oneToMany: {
        connect: [
          {
            id: 'new_elem_1',
          },
        ],
      },
    })
  })

  it('sort', () => {
    copy.oneToMany = copy.oneToMany.reverse()

    const map = literally({
      oneToMany: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toEqual({
      oneToMany: fixture.oneToMany.reverse(),
    })

    expect(updateData).toBeUndefined()
  })

  it('quite random changes', () => {
    copy.oneToMany = [
      fixture.oneToMany[1],
      {
        ...fixture.oneToMany[1],
        __typename: 'abc',
        id: 'new_elem_1',
      },
      {
        ...fixture.oneToMany[1],
        __typename: 'abc',
        id: 'new_elem_2',
      },
    ]

    const map = literally({
      oneToMany: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toEqual({
      oneToMany: [
        fixture.oneToMany[1],
        {
          ...fixture.oneToMany[1],
          __typename: 'abc',
          id: 'new_elem_1',
        },
        {
          ...fixture.oneToMany[1],
          __typename: 'abc',
          id: 'new_elem_2',
        },
      ],
    })

    expect(updateData).toEqual({
      oneToMany: {
        connect: [
          {
            id: 'new_elem_1',
          },
          {
            id: 'new_elem_2',
          },
        ],
        disconnect: [
          {
            id: '2',
          },
        ],
      },
    })
  })
})
