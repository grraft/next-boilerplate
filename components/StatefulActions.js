import React, { Component } from 'react'
import { oneMoreYear } from '../redux/actions'

import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'

class StatefulActions extends Component {
  constructor (props, context) {
    super(props, context)
    this.celebrateBirthday = this.celebrateBirthday.bind(this)
    this.state = {
      hasCelebratedBirthday: false
    }
  }

  celebrateBirthday () {
    this.props.dispatch(oneMoreYear())
    this.setState({ hasCelebratedBirthday: true })
  }

  render () {
    return (
      <div>
        {this.props.name} is {this.props.age} years old
        <hr />
        <button
          onClick={this.celebrateBirthday}
          className={this.state.hasCelebratedBirthday ? 'btn btn-success' : 'btn btn-warning'}
        >celebrate birthday</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.app.bart.fullName,
  age: state.app.bart.age
})

StatefulActions.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number
}

export default withRedux(initStore, mapStateToProps)(StatefulActions)
