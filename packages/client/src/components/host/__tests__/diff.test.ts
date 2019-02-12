import cloneDeep from 'clone-deep'
import { diffAutoUpdataData } from '../diff'

const fixture = {
  __typename: 'fixture',
  id: '123123123',
  literalString: 'hello',
  literalNumber: 21,
  literalBoolean: true,
  literalNull: null,
  literalArrayStrings: ['hello', 'world'],
  literalArrayNumbers: [1, 2, 3],
  // ! this one sneaks through validation, but there is not such graphql data structure
  trickyArray: [[1, 2], [2, 3]],
  nested: {
    __typeName: 'fixture',
    id: '123123123',
    literalString: 'hello',
    literalNumber: 21,
    literalBoolean: true,
    literalNull: null,
    literalArrayStrings: ['hello', 'world'],
    literalArrayNumbers: [1, 2, 3],
  },
}

describe('diffAutoUpdataData', () => {
  let copy: any = cloneDeep(fixture)

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  const getData = () => diffAutoUpdataData(fixture, copy)

  it('report string to null', () => {
    // change string
    copy.literalString = null

    const { queryData } = getData()

    expect(queryData).toEqual({
      literalString: null,
    })
  })

  it('report null to string', () => {
    // change string
    copy.literalNull = 'hello'

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      literalNull: 'hello',
    })

    expect(queryData).toEqual(updateData)
  })

  it('report array element change', () => {
    // change string
    copy.literalArrayNumbers = [1, 2, 4]

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      literalArrayNumbers: [1, 2, 4],
    })

    expect(updateData).toEqual({
      literalArrayNumbers: { set: [1, 2, 4] },
    })
  })

  it('report multiple array element changes', () => {
    // change string
    copy.literalArrayNumbers = [2, 2, 1, 3, 2, 3]
    copy.literalArrayStrings = ['hola!']

    const { queryData, updateData } = getData()

    expect(queryData).toEqual({
      literalArrayNumbers: [2, 2, 1, 3, 2, 3],
      literalArrayStrings: ['hola!'],
    })

    expect(updateData).toEqual({
      literalArrayNumbers: { set: [2, 2, 1, 3, 2, 3] },
      literalArrayStrings: { set: ['hola!'] },
    })
  })

  it('throw on nested updates', () => {
    // change string
    copy.nested.literalString = 'abc'
    copy.literalArrayStrings = 'hola!'

    expect(() => {
      const { queryData, updateData } = getData()
      console.log(queryData)
    }).toThrow()
  })

  it('throw on nested updates 2', () => {
    // change string
    copy.nested.literalArrayNumbers = [3, 6]
    copy.literalArrayStrings = 'hola!'

    expect(() => {
      const { queryData, updateData } = getData()
      console.log(queryData)
    }).toThrow()
  })

  it('does not diff system fields & return undefinded on no changes', () => {
    // change string
    copy.id = '12321321'
    copy.__typename = 'newType'
    copy.createdAt = 'newType'
    copy.updatedAt = 'newType'

    const { queryData, updateData } = getData()
    expect(queryData).toBeUndefined()
    expect(updateData).toBeUndefined()
  })
})
