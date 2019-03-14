import { literally } from '@vats/utils'
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

describe('OneToOne', () => {
  let copy = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (opts?: UpdateDiffOptions) => updateDiff(fixture, copy, opts)

  it('non-nested oneToOne connect', () => {
    copy.empty = fixture.oneToOne as any

    const map = literally({
      empty: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toEqual({
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

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toEqual({
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

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toEqual({
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
})