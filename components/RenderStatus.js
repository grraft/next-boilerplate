import React from 'react'

const RenderStatus = ({isServer}) => {
  return (
    <div className='_container align--center'>
        <div id='prefix' className='_box'>rendered on </div>
        <div id='suffix' className={'_box ' + (isServer ? '_box--green' : '_box--blue')}>
          {isServer ? 'server' : 'client'}
        </div>
      <style jsx>{`
        ._container {
          display: inline-flex;
          font-size: small;
          margin-right: 4px;
        }
        #prefix {
          padding: 2px 4px;          
        }
        #suffix {
          color: white;
          font-weight: 800;
          padding: 2px 4px;
        }
        ._box {
          border-width: thin;
          border-color: grey;
          border-style: solid;
        }
        ._box--green {
          background-color: green;
        }
        ._box--blue {
          background-color: dodgerblue;
        }
        `}</style>
    </div>
  )
}

export default RenderStatus
