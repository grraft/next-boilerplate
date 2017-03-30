import React from 'react'

const RenderStatus = ({isServer}) => {
  return (
    <div className='component__render-status_container align--center'>
      <div className='component__render-status--prefix component__render-status--box'>rendered on </div>
      <div className={'component__render-status--suffix component__render-status--box ' + (isServer ? 'component__render-status--box-green' : 'component__render-status--box-blue')}>
        {isServer ? 'server' : 'client'}
      </div>
      <style jsx>{`
        
        `}</style>
    </div>
  )
}

export default RenderStatus
