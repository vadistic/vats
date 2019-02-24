import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import React, { useReducer } from 'react'
import { render } from 'react-testing-library'
import { augumentDispatch } from '../augument'
import { combineReducers } from '../combine'

interface IState {
  name: string
  data: {
    colors: string[]
  }
}

interface IIncompatibleState {
  name: number
  data: {
    colors: string[]
  }
}

const RESET = 'RESET'
const SET_NAME = 'SET_NAME'
const ActionsA = {
  reset: () => createAction(RESET),
  setName: (name: string) => createAction(SET_NAME, name),
}

type ActionsA = ActionsUnion<typeof ActionsA>

const reducerA = (state: IState, action: ActionsA) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload }

    default:
      return state
  }
}

const ADD_COLOR = 'ADD_COLOR'
const ActionsB = {
  addColor: (color: string) => createAction(ADD_COLOR, color),
}

type ActionsB = ActionsUnion<typeof ActionsB>

const reducerB = (state: IState, action: ActionsB) => {
  switch (action.type) {
    case ADD_COLOR:
      return { ...state, data: { ...state.data, colors: [...state.data.colors, action.payload] } }
    default:
      return state
  }
}

const combinedReducers = combineReducers({
  reducerA,
  reducerB,
})

type CombinedActions = ActionsA | ActionsB

describe('reducer', () => {
  it('combine', () => {
    const initState: IState = {
      name: 'Jakub',
      data: {
        colors: ['black'],
      },
    }

    const App: React.FC = () => {
      const [state, dispatch] = useReducer(combinedReducers, initState)

      const setName = () => {
        dispatch(ActionsA.setName('Anna'))
      }

      const addColor = () => {
        dispatch(ActionsB.addColor('hotpink'))
      }

      return (
        <div>
          <span data-testid="name">{state.name}</span>
          {state.data.colors.map((color, i) => (
            <span data-testid={`color-${i}`} key={i}>
              {color}
            </span>
          ))}
          <button onClick={setName}>Set name</button>
          <button onClick={addColor}>Add color</button>
        </div>
      )
    }

    const { getByTestId, getByText } = render(<App />)

    // init ok
    expect(getByTestId('name').textContent).toBe('Jakub')

    // first reducer works
    getByText('Set name').click()
    expect(getByTestId('name').innerHTML).toBe('Anna')

    // And second too
    getByText('Add color').click()
    expect(getByTestId('color-1').innerHTML).toBe('hotpink')
  })

  it('augument', () => {
    const initState: IState = {
      name: 'Jakub',
      data: {
        colors: ['black'],
      },
    }

    const App: React.FC = () => {
      const [state, dispatch] = useReducer(combinedReducers, initState)

      const augumentedDispatch = augumentDispatch(dispatch, state)

      const nameThunk = (name: string) => async (
        _dispatch: React.Dispatch<CombinedActions>,
        _state: IState,
      ) => {
        _dispatch(ActionsA.setName(name))
        return _state.name
      }

      const colorThunk = (color: string) => async (
        _dispatch: React.Dispatch<ActionsB>,
        _state: IState,
      ) => {
        _dispatch(ActionsB.addColor(name))
        return color
      }

      const setName = () => {
        const res = augumentedDispatch(nameThunk('Carol'))
      }

      const addColor = () => {
        const res = augumentedDispatch(colorThunk('hotpink'))
      }

      return (
        <div>
          <span data-testid="name">{state.name}</span>
          <button onClick={setName}>Set name</button>
        </div>
      )
    }

    const { getByTestId, getByText } = render(<App />)

    // first reducer works
    getByText('Set name').click()
    expect(getByTestId('name').innerHTML).toBe('Carol')
  })
})
