const initialState = {
  bart: {
    fullName: 'Bart Simpson',
    age: 14
  },
  busy: false,
  beer: {},
  beerLoaded: false
}

const reducer = (state = initialState, action) => {
  const u = (d, s = state) => (Object.assign({}, s, d)) // helper to create next state tree
  switch (action.type) {
    case 'TICK':
      return u({lastUpdate: action.ts, light: !!action.light})
    case 'RANDOM_QUOTE':
      return u({quote: action.value})
    case 'GET_BEER':
      return u({busy: true})
    case 'GET_BEER_SUCCESS':
      return u({busy: false, beer: action.value, beerLoaded: true})
    case 'GET_BEER_ERROR':
      return u({busy: false})
    case 'ONE_MORE_YEAR':
      const age = state.bart.age + 1
      const bart = Object.assign({}, state.bart, {age})
      return u({ bart })
    default:
      return state
  }
}

export { initialState, reducer }
