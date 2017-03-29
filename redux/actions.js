export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 8000)
}

export const randomQuote = () => (
  { type: 'RANDOM_QUOTE', value: Math.random() }
)
