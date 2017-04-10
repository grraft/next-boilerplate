/**
 * Demo of how to link stateless functional component
 *  to redux and dispatch actions
 */

import { randomQuote, startClock, getBeer } from '../redux/actions'
import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import StatelessSubComponent from '../components/StatelessSubComponent'

const StatelessActions = ({beer, loaded, dispatch}) => {
  const fetchBeer = () => { dispatch(getBeer()) }
  return <div>
    {loaded ? <StatelessSubComponent name={beer.name} imageUrl={beer.image_url} /> : 'Get the beer man'}
    <button className='btn btn-primary' onClick={fetchBeer}>fetchBeer</button>
  </div>
}

StatelessActions.propTypes = {
  beer: React.PropTypes.object
}

const mapStateToProps = (state) => ({
  beer: state.app.beer,
  loaded: state.app.beerLoaded
})
export default withRedux(initStore, mapStateToProps)(StatelessActions)
