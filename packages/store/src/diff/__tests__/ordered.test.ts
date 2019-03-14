import { applyShallowOrdered, compareEqOrId, orderedCopyArr, orderedCopyObject } from '../ordered'

describe('ordered', () => {
  it('compare literals', () => {
    expect(compareEqOrId('abc', 'abc')).toBeTruthy()
    expect(compareEqOrId('abc', 'abcd')).toBeFalsy()
  })

  it('compare objects', () => {
    expect(
      compareEqOrId(
        {
          id: '123',
          field: 'a',
        },
        {
          id: '123',
          field: 'b',
        },
      ),
    ).toBeTruthy()

    expect(
      compareEqOrId(
        {
          id: '123',
          field: 'a',
        },
        {
          id: '1234',
          field: 'b',
        },
      ),
    ).toBeFalsy()
  })

  it('ordered copy array literals', () => {
    expect(orderedCopyArr(['1', '2', '3'], ['3', '2', '4'])).toEqual(['2', '3', '4'])
  })

  it('ordered copy array objects', () => {
    expect(
      orderedCopyArr(
        [
          { id: '1', value: 'old' },
          { id: '1', value: 'old' },
          { id: '2', value: 'old' },
          { id: '4', value: 'old' },
        ],
        [
          { id: '2', value: 'new' },
          { id: '1', value: 'new' },
          { id: '3', value: 'new' },
          { id: '2', value: 'new' },
        ],
      ),
    ).toEqual([
      // copied new value keeping order
      { id: '1', value: 'new' },
      // deleted duplicate
      { id: '2', value: 'new' },
      // inserted new
      { id: '3', value: 'new' },
      // inserted duplicate
      { id: '2', value: 'new' },
    ])
  })

  it('ordered copy unchanged', () => {
    expect(
      orderedCopyArr(
        [
          { id: '1', value: 'old' },
          { id: '1', value: 'old' },
          { id: '2', value: 'old' },
          { id: '4', value: 'old' },
        ],
        [
          { id: '1', value: 'old' },
          { id: '1', value: 'old' },
          { id: '2', value: 'old' },
          { id: '4', value: 'old' },
        ],
      ),
    ).toEqual([
      { id: '1', value: 'old' },
      { id: '1', value: 'old' },
      { id: '2', value: 'old' },
      { id: '4', value: 'old' },
    ])
  })

  it('ordered copy object props', () => {
    expect(
      orderedCopyObject(
        {
          prop: 'old',
          arr: ['3', '4', '5'],
        },
        {
          prop: 'new',
          arr: ['1', '2', '3', '4'],
        },
      ),
    ).toEqual({
      prop: 'new',
      arr: ['3', '4', '1', '2'],
    })
  })
})

describe('applyShallowOrdered', () => {
  it('handle object', () => {
    const target: any = {
      data: {
        copy: 'a',
        delete: 'a',
        arrString: ['3', '2', '1'],
      },
    }

    const source: any = {
      data: {
        copy: 'a',
        add: 'c',
        arrString: ['1', '2'],
      },
    }

    const result = {
      data: {
        copy: 'a',
        add: 'c',
        arrString: ['2', '1'],
      },
    }

    applyShallowOrdered(target, source)

    expect(target).toEqual(result)
  })

  it('handle arrays basic', () => {
    const targetArr: any = {
      data: [
        {
          id: '1',
          arrString: ['3', '2', '1'],
        },
        {
          id: '2',
          arrString: ['3', '2', '1'],
        },
      ],
    }

    const sourceArr = {
      data: [
        {
          id: '2',
          arrString: ['1', '2'],
        },
      ],
    }

    applyShallowOrdered(targetArr, sourceArr)

    // delete elements and reorder array
    expect(targetArr).toEqual({
      data: [
        {
          id: '2',
          arrString: ['2', '1'],
        },
      ],
    })
  })

  it('handle arrays skipping & equality', () => {
    const element = {
      id: '1',
      arrString: ['3', '2', '1'],
    }

    const targetArr: any = {
      data: [
        element,
        {
          id: '2',
          arrString: ['3', '2', '1'],
        },
      ],
    }

    const sourceArr = {
      data: [
        {
          id: '1',
          arrString: ['3', '2', '1'],
        },
        {
          id: '2',
          arrString: ['1', '2'],
        },
      ],
    }

    applyShallowOrdered(targetArr, sourceArr)

    // result ok
    expect(targetArr).toEqual({
      data: [
        {
          id: '1',
          arrString: ['3', '2', '1'],
        },
        {
          id: '2',
          arrString: ['2', '1'],
        },
      ],
    })

    // skips unchanged, using deep equality & keeps reference
    expect(targetArr.data[0]).toBe(element)
  })

  it('handle nulls', () => {
    const targetObj: any = { data: null }

    const sourceObj = {
      data: {
        id: '1',
        arrString: ['3', '2', '1'],
      },
    }

    applyShallowOrdered(targetObj, sourceObj)

    expect(targetObj).toEqual({
      data: {
        id: '1',
        arrString: ['3', '2', '1'],
      },
    })
  })
})
