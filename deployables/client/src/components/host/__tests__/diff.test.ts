import cloneDeep from 'clone-deep'
import { diffAutoUpdataData, Relations } from '../diff'

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

describe('diff scalar changes', () => {
  let copy: typeof fixture

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (map?: Relations) => diffAutoUpdataData(fixture, copy, map)

  it('report string to null', () => {
    copy.scalarString = null as any

    const { queryData, scalars } = getData()

    expect(queryData).toEqual({
      scalarString: null,
    })
  })

  it('report null to string', () => {
    copy.scalarNull = 'hello' as any

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      scalarNull: 'hello',
    })

    expect(queryData).toEqual(updateData)
  })

  it('report single array element change', () => {
    copy.scalarArrayNumbers = [1, 2, 4]

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      scalarArrayNumbers: [1, 2, 4],
    })

    expect(updateData).toEqual({
      scalarArrayNumbers: { set: [1, 2, 4] },
    })
  })

  it('report multiple array element changes', () => {
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

  it('does not diff system fields & return undefinded on no changes', () => {
    copy.createdAt = 'newType'
    copy.updatedAt = 'newType'

    const { queryData, updateData } = getData()
    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })

  it('report scalar undefined on when only relations change', () => {
    copy.oneToOne = null as any

    const {
      scalars: { queryData, updateData },
    } = getData({
      oneToOne: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })
})

describe('diff relation changes', () => {
  let copy = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (map?: Relations) => diffAutoUpdataData(fixture, copy, map)

  it('report relations undefined on when only scalars change', () => {
    copy.scalarString = '213223'

    const {
      relations: { queryData, updateData },
    } = getData({
      scalarString: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    })

    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })

  // comment for clean console

  it('report relations undefined without map', () => {
    copy.oneToMany = [copy.oneToMany[0]]

    const {
      relations: { queryData, updateData },
    } = getData()
    console.warn('IGNORE PREVIOUS WARNING!')
    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })
})
