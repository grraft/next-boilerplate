import React from 'react'
import Link from 'next/link'
import { initStore } from '../redux/store'
import { startClock, randomQuote } from '../redux/actions'
import withRedux from 'next-redux-wrapper'
import ContactForm from '../components/ContactForm'
import SyncValidationForm from '../components/SyncValidationForm'

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
      <div>
        <style jsx global>{`
            
          `}</style>
      Hello World - {this.props.isServer ? 'from server' : 'from client'}
        <br />
        <button onClick={() => { this.props.dispatch(randomQuote()) }}>random quote</button>
      </div>
      <hr />
      <br />
      <Link prefetch href='/about'><a className='large'>About</a></Link>
      <br />
      <ContactForm onSubmit={this.submit} />
      <hr />
      <SyncValidationForm onSubmit={this.submit} />
    </div>
  }
}

export default withRedux(initStore)(IndexPage)
