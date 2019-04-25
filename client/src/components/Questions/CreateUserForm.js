import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions/user'

class CreateUserForm extends Component {

  constructor(props){
    super(props)
    this.state = ({
      username: '',
      password: ''
    })
  }

  createUser(event) {
    event.preventDefault()
    this.props.createUser(this.state.username, this.state.password)
    this.props.history.push('/')
  }

  render() {
    const username = this.state.username;
    const password = this.state.password;

    return (
      <div>
        <h2>Create A New User</h2>
        <form onSubmit={event => this.createUser(event)} className='login-form'>
          <div>Username:</div>
          <input
            className='form-control'
            onChange={({ target }) => this.setState({ username: target.value })}
            style={{ marginBottom: 10 }}
          />
          <div>Password:</div>
          <input
            className='form-control'
            type='password'
            onChange={({ target }) => this.setState({ password: target.value })}
            style={{ marginBottom: 10 }}
          />
          <button
            className='btn btn-primary'
            disabled={username === '' || password === ''}
            type='submit'
          >
          Create
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createUser
}

export default connect(null, mapDispatchToProps)(CreateUserForm)
