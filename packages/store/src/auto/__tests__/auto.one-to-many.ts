import { insertElOnIndex, literally } from '@vats/utils'
import { cloneDeep } from 'apollo-utilities'
import { autoUpdate } from '..'
import { AutoUpdateOptions } from '../auto'

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

describe('autoUpdate oneToMany', () => {
  let copy = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (opts?: AutoUpdateOptions) => autoUpdate(fixture, copy, opts)

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

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
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

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
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

  it('sort yields no update', () => {
    copy.oneToMany = copy.oneToMany.reverse()

    const map = literally({
      oneToMany: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual(copy)

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

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
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
        disconnect: [
          {
            id: '1',
          },
        ],
        connect: [
          {
            id: 'new_elem_1',
          },
          {
            id: 'new_elem_2',
          },
        ],
      },
    })
  })
})
