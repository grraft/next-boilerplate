import axios from 'axios'

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 8000)
}

export const randomQuote = () => (
  { type: 'RANDOM_QUOTE', value: Math.random() }
)

export const getBeerError = (error) => ({ type: 'GET_BEER_ERROR', error })

export const getBeerSuccess = (beer) => ({ type: 'GET_BEER_SUCCESS', value: beer })

export function getBeer () {
  return (dispatch) => {
    dispatch({ type: 'GET_BEER' })
    axios.get(`https://api.punkapi.com/v2/beers/1`)
    .then((response) => {
      console.log(response)
      dispatch(getBeerSuccess(response.data[0]))
    })
    .catch((error) => {
      console.log(error)
      dispatch(getBeerError(error))
    })
  }
}
