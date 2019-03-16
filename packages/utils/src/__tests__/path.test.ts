import { pathProxy } from '../path'

describe('pathProxy', () => {
  const fixture = {
    string: 'string',
    nested: {
      array: [1, 2, 3, 4],
      arrayofObjects: [{ id: '123', value: 123 }],
      deepNested: {
        string: 'abc',
      },
    },
  }

  //  has valid type
  const p = pathProxy<typeof fixture>()

  it('build short path', () => {
    expect(p.string.PATH).toBe('string')
  })

  it('build nested path', () => {
    expect(p.nested.deepNested.string.PATH).toBe('nested.deepNested.string')
  })

  it('build nice array paths', () => {
    expect(p.nested.array[0].PATH).toBe('nested.array[0]')
  })

  it('supports paths inside arrays of objects', () => {
    expect(p.nested.arrayofObjects[0].PATH).toBe('nested.arrayofObjects[0]')
    expect(p.nested.arrayofObjects[0].id.PATH).toBe('nested.arrayofObjects[0].id')
  })
})
