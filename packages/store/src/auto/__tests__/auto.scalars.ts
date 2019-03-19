import { cloneDeep } from 'apollo-utilities'
import { autoMutation, AutoMutationOptions } from '..'

const fixtureFields = {
  __typename: '',
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
    __typeName: 'oneToOne',
    ...fixtureFields,
    oneToOneToOne: {
      __typeName: 'oneToOneToOne',
      ...fixtureFields,
    },
    oneToOneToMany: [
      {
        __typeName: 'onetoOneToMany',
        ...fixtureFields,
      },
      {
        __typeName: 'onetoOneToMany',
        ...fixtureFields,
      },
    ],
  },
  oneToMany: [
    {
      __typeName: 'oneToMany',
      ...fixtureFields,
      id: '1',
    },
    {
      __typeName: 'oneToMany',
      ...fixtureFields,
      id: '2',
    },
  ],
}

describe('autoUpdate scalar updates', () => {
  let copy: typeof fixture

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (opts?: AutoMutationOptions) => autoMutation(fixture, copy, opts)

  it('string to null', () => {
    copy.scalarString = null as any

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      ...fixture,
      scalarString: null,
    })

    expect(updateData).toEqual({
      scalarString: null,
    })
  })

  it('null to string', () => {
    copy.scalarNull = 'hello' as any

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      ...fixture,
      scalarNull: 'hello',
    })

    expect(updateData).toEqual({
      scalarNull: 'hello',
    })
  })

  it('single array element change', () => {
    copy.scalarArrayNumbers = [1, 2, 4]

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      ...fixture,
      scalarArrayNumbers: [1, 2, 4],
    })

    expect(updateData).toEqual({
      scalarArrayNumbers: { set: [1, 2, 4] },
    })
  })

  it('multiple array element changes', () => {
    copy.scalarArrayNumbers = [2, 2, 1, 3, 2, 3]
    copy.scalarArrayStrings = ['world']

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      ...fixture,
      scalarArrayNumbers: [2, 2, 1, 3, 2, 3],
      scalarArrayStrings: ['world'],
    })

    expect(updateData).toEqual({
      scalarArrayNumbers: { set: [2, 2, 1, 3, 2, 3] },
      scalarArrayStrings: { set: ['world'] },
    })
  })

  it('report relations updates without map (but query data has them for sanity in recursions)', () => {
    copy.oneToMany = [copy.oneToMany[0]]

    const { queryData, updateData } = getData()

    expect(queryData).toEqual(copy)

    expect(updateData).toBeUndefined()
  })
})
