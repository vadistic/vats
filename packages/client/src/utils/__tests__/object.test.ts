import cloneDeep from 'clone-deep'
import { recursiveTraverse } from '../object'

const fixture = {
  string: 'string',
  nested: {
    array: [1, 2, 3, 4],
    deepNested: {
      string: 'abc',
    },
  },
}

describe('object utils', () => {
  let copy: typeof fixture

  beforeEach(() => {
    copy = cloneDeep(fixture)
  })

  it('recursiveTraverse can return undefined', () => {
    const result = recursiveTraverse(fixture, [], (val, path) => {
      if (path.includes('searchElement')) {
        return true
      }
    })

    expect(result).toBeUndefined()
  })

  it('recursiveTraverse returns cb value', () => {
    const result = recursiveTraverse(fixture, [], (val, path) => {
      if (path.includes('string')) {
        return 'cats'
      }
    })

    expect(result).toBe('cats')
  })

  it('recursiveTraverse provides valid path & value props to cb', () => {
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
