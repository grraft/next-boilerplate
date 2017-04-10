import FontAwesome from 'react-fontawesome'
import Link from 'next/link'

export default () => (
  <div className='section__hero_features col-md-8 col-md-offset-2'>
    <div className='row'>
      <div className='section__hero_features__col col-md-4'>
        <FontAwesome
          name='server'
          size='4x'
        />
        <br />
        <div className='section__hero_features__title'>
        Server Side Rendering
        </div>
        <div className='section__hero_features__description'>
          <ul>
            <li>Fast initial page load by SSR</li>
            <li>Better SEO coverage across engines</li>
            <li>Prefetch pages for faster page clientside</li>
          </ul>
        </div>
      </div>
      <div className='section__hero_features__col col-md-4'>
        <FontAwesome
          name='code'
          size='4x'
        />
        <br />
        Developer Experience
        <div className='section__hero_features__description'>
          <ul>
            <li>Modern tooling: React, Redux, Next.js, Node, ES6</li>
            <li>Checkout the <Link href='/form-example'><a>examples</a></Link> with your devtools running</li>
          </ul>
        </div>
      </div>
      <div className='section__hero_features__col col-md-4'>
        <FontAwesome
          name='battery'
          size='4x'
        />
        <br />
        Batteries Included
        <div className='section__hero_features__description'>
          <ul>
            <li>Manage app state with Redux, form state with Redux-Form. See <Link href='/form-example'><a>examples</a></Link></li>
            <li>Jest unit tests</li>
            <li>and <Link prefetch href='/demo'><a>much more</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      
      }
      `}</style>
  </div>
)
