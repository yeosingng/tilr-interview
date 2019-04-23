import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions/user'

class CreateUserForm extends Component {

  constructor(props){
    super(props)
    this.state = ({
      username: '',
      displayName: '',
      password: ''
    })
  }

  createUser(event) {
    event.preventDefault()
    this.props.createUser(this.state.username, this.state.displayName, this.state.password)
  }

  render() {
    const username = this.state.username;
    const displayName = this.state.displayName;
    const password = this.state.password;

    return (
      <form onSubmit={event => this.createUser(event)} className='login-form'>
        <div>Username:</div>
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ username: target.value })}
        />
        <div>Password:</div>
        <input
          className='form-control'
          type='password'
          onChange={({ target }) => this.setState({ password: target.value })}
        />
        <button
          className='btn btn-primary'
          disabled={username === '' || password === ''}
          type='submit'
        >
        Login
        </button>
      </form>

    )
  }
}

const mapDispatchToProps = {
  createUser
}

export default connect(null, mapDispatchToProps)(CreateUserForm)
