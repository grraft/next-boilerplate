import ContactForm from '../components/ContactForm'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'

const handleSubmit = (vals) => {
  console.log('Submitted', vals)
}

const FormExample = () => (
  <div className='container'>
    <ContactForm onSubmit={handleSubmit} />
  </div>
)

export default withRedux(initStore)(FormExample)
