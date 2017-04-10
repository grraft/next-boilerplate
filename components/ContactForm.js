import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { fetchRandomImage } from '../redux/actions'

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text"/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>

      <button type='submit' className='btn btn-default'>Submit</button>
      <button type='button' className='btn btn-primary' onClick={fetchRandomImage()}>Random Image</button>
    </form>
  )
}

export default reduxForm({
  form: 'simple'
})(SimpleForm)
