import { recursiveTraverse, tryGetIn } from '../object'

describe('recursiveTraverse', () => {
  const fixture = {
    string: 'string',
    nested: {
      array: [1, 2, 3, 4],
      deepNested: {
        string: 'abc',
      },
    },
  }

  it('can return undefined', () => {
    const result = recursiveTraverse(fixture, [], (val, path) => {
      if (path.includes('searchElement')) {
        return true
      }
    })

    expect(result).toBeUndefined()
  })

  it('returns cb value', () => {
    const result = recursiveTraverse(fixture, [], (val, path) => {
      if (path.includes('string')) {
        return 'cats'
      }
    })

    expect(result).toBe('cats')
  })

  it('provides valid path & value props to cb', () => {
    const result = recursiveTraverse(fixture, [], (val, path) => {
      if (path[0] === 'nested' && path[1] === 'array') {
        if (Array.isArray(val) && val.includes(1)) {
          return 'ok'
        } else {
          return 'not ok'
        }
      }
    })

    expect(result).toBe('ok')
  })
})

describe('tryGetIn', () => {
  const fixture = {
    string: 'string',
    nested: {
      array: [1, 2, 3, 4],
      deepNested: {
        string: 'abc',
      },
    },
  }

  it('returns value or undefind', () => {
    const result = tryGetIn(fixture, 'nested', 'deepNested')
    const resultFb = tryGetIn(fixture, 'nested', 'nonexistent')

    expect(result).toEqual({
      string: 'abc',
    })

    expect(resultFb).toBeUndefined()
  })
})
