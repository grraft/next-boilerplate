import axios from 'axios'

export const getBeerRequest = () => ({ type: 'GET_BEER_REQUEST' })
export const getBeerError = (error) => ({ type: 'GET_BEER_ERROR', error })
export const getBeerSuccess = (beer) => ({ type: 'GET_BEER_SUCCESS', value: beer })

export function getBeer () {
  return (dispatch) => {
    dispatch(getBeerRequest())
    return axios.get(`https://api.punkapi.com/v2/beers/${Math.ceil(100 * Math.random())}`)
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

export const oneMoreYear = () => ({ type: 'ONE_MORE_YEAR' })
