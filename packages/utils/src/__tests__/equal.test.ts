import { deepEqual, shallowEqual } from '../equal'

describe('shallowEqual', () => {
  it('compare primitives', () => {
    expect(shallowEqual('a', 'a')).toBeTruthy()
    expect(shallowEqual(null, null)).toBeTruthy()

    expect(shallowEqual('a', 'b')).toBeFalsy()
    expect(shallowEqual('a', null)).toBeFalsy()
  })

  it('copmpare objects', () => {
    const objA = {
      a: 'a',
    }

    const objB = {
      a: 'a',
    }

    const objC = {
      a: 'notA',
    }

    const nestedA = {
      a: objA,
    }

    const nestedB = {
      a: objA,
    }

    const nestedC = {
      a: { ...objA },
    }

    expect(shallowEqual(objA, objB)).toBeTruthy()
    expect(shallowEqual(objA, objC)).toBeFalsy()

    expect(shallowEqual(nestedA, nestedB)).toBeTruthy()
    expect(shallowEqual(nestedA, nestedC)).toBeFalsy()
  })

  it('compare arrays', () => {
    const arrA = ['a', 'b']
    const arrB = ['a', 'b']
    const arrC = ['a', 'c']

    const nestedArrA = [arrA, arrB]
    const nestedArrB = [arrA, arrB]
    const nestedArrC = [arrA, ['a', 'b']]

    expect(shallowEqual(arrA, arrB)).toBeTruthy()
    expect(shallowEqual(arrA, arrC)).toBeFalsy()

    expect(shallowEqual(nestedArrA, nestedArrB)).toBeTruthy()
    expect(shallowEqual(nestedArrA, nestedArrC)).toBeFalsy()
  })
})

describe('deepEqual', () => {
  it('compare nested objects & arrays', () => {
    const objA = {
      a: {
        b: {
          c: ['d', 'f', { prop: 'a' }],
        },
      },
    }

    const objB = {
      a: {
        b: {
          c: ['d', 'f', { prop: 'a' }],
        },
      },
    }

    const objC = {
      a: {
        b: {
          c: ['d', 'notF'],
        },
      },
    }

    expect(deepEqual(objA, objB)).toBeTruthy()
    expect(deepEqual(objA, objC)).toBeFalsy()
  })

  it('compare nested references', () => {
    const element = {
      id: '1',
    }

    const arrA = [element, { id: '2' }]

    const arrB = [element, { id: '2' }]

    expect(deepEqual(arrA, arrB)).toBeTruthy()
  })
})
