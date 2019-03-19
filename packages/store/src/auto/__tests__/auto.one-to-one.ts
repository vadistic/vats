import { literally } from '@vats/utils'
import { cloneDeep } from 'apollo-utilities'
import { autoUpdate, AutoUpdateOptions } from '..'

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

describe('autoUpdate OneToOne', () => {
  let copy = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (opts?: AutoUpdateOptions) => autoUpdate(fixture, copy, opts)

  it('non-nested oneToOne connect', () => {
    copy.empty = fixture.oneToOne as any

    const map = literally({
      empty: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
      empty: fixture.oneToOne,
    })
    expect(updateData).toEqual({
      empty: {
        connect: {
          id: fixture.oneToOne.id,
        },
      },
    })
  })

  it('non-nested oneToOne delete', () => {
    copy.oneToOne = null as any

    const map = literally({
      oneToOne: {
        onCreate: 'connect',
        onDelete: 'delete',
      },
    })

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
      oneToOne: null,
    })

    expect(updateData).toEqual({
      oneToOne: {
        delete: {
          id: fixture.oneToOne.id,
        },
      },
    })
  })

  it('non-nested oneToOne replace', () => {
    copy.oneToOne = {
      ...cloneDeep(fixture.oneToOne),
      __typename: 'oneToOne',
      id: 'new',
    }

    const map = literally({
      oneToOne: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
      oneToOne: {
        ...cloneDeep(fixture.oneToOne),
        __typename: 'oneToOne',
        id: 'new',
      },
    })

    expect(updateData).toEqual({
      oneToOne: {
        disconnect: {
          id: fixture.oneToOne.id,
        },
        connect: {
          id: 'new',
        },
      },
    })
  })

  it('nested oneToOneToOne update', () => {
    copy.oneToOne.oneToOneToOne.scalarNull = 'hello' as any

    const map = literally({})

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
      oneToOne: {
        ...fixture.oneToOne,
        oneToOneToOne: {
          ...fixture.oneToOne.oneToOneToOne,
          scalarNull: 'hello',
        },
      },
    })

    expect(updateData).toEqual({
      oneToOne: {
        update: {
          oneToOneToOne: {
            update: {
              scalarNull: 'hello',
            },
          },
        },
      },
    })
  })

  it('nested oneToOneToOne disabled with flat', () => {
    copy.oneToOne.oneToOneToOne.scalarNull = 'hello' as any
    copy.oneToOne.scalarNull = 'hello' as any

    const map = literally({
      oneToOne: {
        onCreate: 'connect',
        onDelete: 'disconnect',
        onUpdate: 'flat',
      },
    })

    const { queryData, updateData } = getData({ map })

    expect(queryData).toEqual({
      ...fixture,
      oneToOne: {
        ...fixture.oneToOne,
        scalarNull: 'hello',
        oneToOneToOne: {
          ...fixture.oneToOne.oneToOneToOne,
          scalarNull: 'hello',
        },
      },
    })

    expect(updateData).toEqual({
      oneToOne: {
        update: {
          scalarNull: 'hello',
        },
      },
    })
  })
})
