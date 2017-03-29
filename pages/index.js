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
            * {
              font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
            }
            body {
              margin: 0;
              padding: 25px 50px;
            }
            a {
              color: #22BAD9;
            }
            p {
              font-size: 40px;
              line-height: 24px;
            }
            article {
              margin: 0 auto;
              max-width: 650px;
            }
            button {
              align-items: center;
              background-color: #22BAD9;
              border: 0;
              color: white;
              display: flex;
              padding: 5px 7px;
            }
            button:active {
              background-color: #1B9DB7;
              transition: background-color .3s
            }
            button:focus {
              outline: none;
            }
          `}</style>
      Hello World - {this.props.isServer ? 'from server' : 'from client'}
        <br />
        <button onClick={() => { this.props.dispatch(randomQuote()) }}>random quote</button>
      </div>
      <hr />
      <br />
      <Link prefetch href='/about'><a>About</a></Link>
      <br />
      <ContactForm onSubmit={this.submit} />
      <hr />
      <SyncValidationForm onSubmit={this.submit} />
    </div>
  }
}

export default withRedux(initStore)(IndexPage)
