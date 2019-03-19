import { autoUpdate } from '..'

const fixtureFields = {
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

describe('auto create', () => {
  it('handle creating simple createData', () => {
    const { queryData, updateData } = autoUpdate({}, fixtureFields, {})

    expect(queryData).toEqual({
      id: '123',
      createdAt: '123',
      updatedAt: '123',
      scalarString: 'hello',
      scalarNumber: 21,
      scalarBoolean: true,
      scalarNull: null,
      scalarArrayStrings: ['hello', 'new', 'world'],
      scalarArrayNumbers: [1, 2, 3],
    })

    expect(updateData).toEqual({
      scalarString: 'hello',
      scalarNumber: 21,
      scalarBoolean: true,
      scalarArrayStrings: { set: ['hello', 'new', 'world'] },
      scalarArrayNumbers: { set: [1, 2, 3] },
    })
  })
})
