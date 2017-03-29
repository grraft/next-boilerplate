const initialState = {
  lastUpdate: 0,
  light: false,
  simple: false,
  form: {
    name: '',
    address: ''
  },
  quote: '',
  simpleForm: {}
}

const reducer = (state = initialState, action) => {
  const u = (d, s = state) => (Object.assign({}, s, d)) // helper to create next state tree
  switch (action.type) {
    case 'TICK':
      return u({lastUpdate: action.ts, light: !!action.light})
    case 'RANDOM_QUOTE':
      return u({quote: action.value})
    default:
      return state
  }
}

export { initialState, reducer }
