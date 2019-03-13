import { literally } from '@vats/utils'
import { cloneDeep } from 'apollo-utilities'
import { updateDiff, UpdateDiffOptions } from '..'

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
  // ! this one sneaks through validation, but there is not such graphql data structure
  trickyArray: [[1, 2], [2, 3]],
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

describe('diff scalar updates', () => {
  let copy: typeof fixture

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (opts?: UpdateDiffOptions) => updateDiff(fixture, copy, opts)

  it('string to null', () => {
    copy.scalarString = null as any

    const { queryData } = getData()

    expect(queryData).toEqual({
      scalarString: null,
    })
  })

  it('null to string', () => {
    copy.scalarNull = 'hello' as any

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      scalarNull: 'hello',
    })

    expect(queryData).toEqual(updateData)
  })

  it('single array element change', () => {
    copy.scalarArrayNumbers = [1, 2, 4]

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
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
      scalarArrayNumbers: [2, 2, 1, 3, 2, 3],
      scalarArrayStrings: ['world'],
    })

    expect(updateData).toEqual({
      scalarArrayNumbers: { set: [2, 2, 1, 3, 2, 3] },
      scalarArrayStrings: { set: ['world'] },
    })
  })

  it('scalar undefined when only relations change', () => {
    copy.oneToOne = null as any

    const map = literally({
      oneToOne: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const {
      scalars: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })
})

describe('diff relations reporting', () => {
  let copy = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (opts?: UpdateDiffOptions) => updateDiff(fixture, copy, opts)

  it('report relations undefined when only scalars change', () => {
    copy.scalarString = '213223'

    const map = literally({
      scalarString: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    const {
      relations: { queryData, updateData },
    } = getData({ map })

    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })

  it('report relations undefined without map', () => {
    copy.oneToMany = [copy.oneToMany[0]]

    // supress console
    console.warn = jest.fn()

    const {
      relations: { queryData, updateData },
    } = getData()

    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
    expect(console.warn).toBeCalled()
  })
})
