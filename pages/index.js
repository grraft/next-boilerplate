import React from 'react'
import Link from 'next/link'
import { initStore } from '../redux/store'
import { startClock, randomQuote } from '../redux/actions'
import withRedux from 'next-redux-wrapper'
import ContactForm from '../components/ContactForm'
import SyncValidationForm from '../components/SyncValidationForm'
import RenderStatus from '../components/RenderStatus'
import HomeFeatures from '../components/HomeFeatures'

class IndexPage extends React.Component {
  static async getInitialProps ({store, isServer, dispatch}) {
    store.dispatch(startClock())
    return { isServer, dispatch }
  }

  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (values) {
    // Do something with the form values
    console.log(values)
  }

  render () {
    return <div>
      <section className='align--center section__hero'>
        <div className='section__cover'>
          <div>
            <h1 className='section__hero-headline'>
              Next<small className='section__hero-headline--js'>.js</small> Boilerplate
            </h1>
            <h4 className='section__hero-subheadline'>
              Universal React Redux Web Applications
            </h4>
            <RenderStatus isServer={this.props.isServer} />
          </div>
          <HomeFeatures />
        </div>
      </section>
      <style jsx>{`
        
        `}</style>
    </div>
  }
}

export default withRedux(initStore)(IndexPage)
