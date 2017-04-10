import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import StatelessActions from '../components/StatelessActions.js'
import StatefulActions from '../components/StatefulActions.js'
import Link from 'next/link'

const DemoPage = (props) => {
  return <div className='container'>
    <section>
      <Link href='/'><a>Back</a></Link>
    </section>
    <section>
      <StatelessActions />
    </section>
    <section>
      <StatefulActions />
    </section>
    <style jsx>{`
      section::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px; // suit your need
        background: black; // suit your need
        top: 100%;
        left: 0;
      }
    `}</style>
  </div>
}

export default withRedux(initStore)(DemoPage)
