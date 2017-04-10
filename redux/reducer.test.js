/* global describe, it, expect */
import { initialState, reducer } from './reducer.js'
import { oneMoreYear } from './actions.js'

describe('Reducer', () => {
  it('should use correct initial state', () => {
    const expectedInitialState = {
      bart: {
        fullName: 'Bart Simpson',
        age: 14
      },
      busy: false,
      beer: {},
      beerLoaded: false
    }
    const initialReducerState = reducer(undefined, {})
    expect(expectedInitialState).toEqual(initialReducerState)
  })

  it('should not respond to irrelevant actions', () => {
    const unrelatedAction = { type: '' }
    const nextState = reducer(initialState, unrelatedAction)
    expect(nextState).toEqual(initialState)
  })

  it(`increment Bart's age on ONE_MORE_YEAR`, () => {
    const bart = Object.assign({}, initialState.bart, {age: initialState.bart.age + 1})
    const expectedState = Object.assign({}, initialState, {bart})
    const nextState = reducer(initialState, oneMoreYear())
    expect(nextState).toEqual(expectedState)
  })
})
