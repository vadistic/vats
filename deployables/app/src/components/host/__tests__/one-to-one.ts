import cloneDeep from 'clone-deep'
import { diffAutoUpdataData, Relations } from '../diff'

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

  const getData = (map?: Relations) => diffAutoUpdataData(fixture, copy, map)

  it('non-nested oneToOne connect', () => {
    copy.empty = fixture.oneToOne as any

    const {
      relations: { queryData, updateData },
    } = getData({
      empty: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

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

    const {
      relations: { queryData, updateData },
    } = getData({
      oneToOne: {
        onCreate: 'connect',
        onDelete: 'delete',
      },
    })

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

    const {
      relations: { queryData, updateData },
    } = getData({
      oneToOne: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

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
