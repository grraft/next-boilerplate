import React from 'react'
import Link from 'next/link'
import { initStore } from '../redux/store'
import { startClock, randomQuote } from '../redux/actions'
import withRedux from 'next-redux-wrapper'
import ContactForm from '../components/ContactForm'
import SyncValidationForm from '../components/SyncValidationForm'
import RenderStatus from '../components/RenderStatus'

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
            <h2 className='section__hero-subheadline'>
              Universal React Redux Webapps
            </h2>
            <RenderStatus isServer={this.props.isServer} />
          </div>
        </div>
      </section>
      <div>
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
      <style jsx>{`
        body {
          margin: 0
        }
        .section__hero {
          background: url(https://s3.eu-west-2.amazonaws.com/img-repo/image3-opt.jpg) no-repeat center center fixed; 
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          min-height: 100vh;
        }
        .section__cover {
          min-height: inherit;
          background-color: rgba(146, 146, 146, 0.84);
          color: white;
        }
        .section__hero-headline {
          font-size: 4.5em;
          padding-top: 25vh;
          margin: 0;
        }
        .section__hero-subheadline {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 400;
        }
        .section__hero-headline--js {
          font-size: 2.0rem;
          font-weight: 400;
        }
        @media (max-width: 720px) {
          .section__hero-headline {
            font-size: 2em;
            padding-top: 8vh;
          }
          .section__hero-headline--js {
            font-size: 1rem;
          }
        }
        `}</style>
    </div>
  }
}

export default withRedux(initStore)(IndexPage)
