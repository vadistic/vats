import cloneDeep from 'clone-deep'
import { diffAutoUpdataData, IRelationsMap } from '../diff'

const fixtureFields = {
  __typename: '',
  id: '123',
  createdAt: '123',
  updatedAt: '123',
  scalarString: 'hello',
  scalarNumber: 21,
  scalarBoolean: true,
  scalarNull: null,
  scalarArrayStrings: ['hello', 'world'],
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

  const getData = () => diffAutoUpdataData(fixture, copy)

  it('report string to null', () => {
    copy.scalarString = null as any

    const { queryData } = getData()

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
    copy.scalarArrayStrings = ['hola!']

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      scalarArrayNumbers: [2, 2, 1, 3, 2, 3],
      scalarArrayStrings: ['hola!'],
    })

    expect(updateData).toEqual({
      scalarArrayNumbers: { set: [2, 2, 1, 3, 2, 3] },
      scalarArrayStrings: { set: ['hola!'] },
    })
  })

  it('does not diff system fields & return undefinded on no changes', () => {
    copy.id = '12321321'
    copy.__typename = 'newType'
    copy.createdAt = 'newType'
    copy.updatedAt = 'newType'

    const { queryData, updateData } = getData()
    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })
})

describe('diff relation changes', () => {
  let copy = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = (map?: IRelationsMap) => diffAutoUpdataData(fixture, copy, map)

  it('report undefined on scalars or without map', () => {
    copy.scalarString = '213223'

    const { relationsData: onScalar } = getData({
      scalarString: {
        onUpdate: 'update',
      },
    })

    const { relationsData: withoutMap } = getData()

    expect(onScalar).toBeUndefined()
    expect(withoutMap).toBeUndefined()
  })

  it('non-nested oneToOne delete', () => {
    // delete
    copy.oneToOne = null as any

    const { relationsData } = getData({
      oneToOne: {
        onDelete: 'disconnect',
      },
    })

    expect(relationsData).toEqual({
      oneToOne: null,
    })
  })

  it('non-nested oneToOne create', () => {
    // delete
    copy.empty = fixture.oneToOne as any

    const { relationsData } = getData({
      empty: {
        onCreate: 'connect',
      },
    })

    expect(relationsData).toEqual({
      empty: fixture.oneToOne,
    })
  })

  it('non-nested single oneToMany create', () => {
    // delete
    copy.oneToMany.push(fixture.oneToMany[0])

    const { relationsData } = getData({
      oneToMany: {
        onCreate: 'connect',
      },
    })

    // how to build both diffs and upodate data on relationships?
    expect(relationsData).toEqual({
      oneToOne: { ...fixture.oneToOne, scalarNumber: 123 },
    })
  })
})
