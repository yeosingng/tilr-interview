import React, { Component } from 'react'

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state = ({
      username: '',
      password: ''
    })
  }

  Login(event) {
    event.preventDefault()
    this.props.createUser(this.state.username, this.state.password)
  }

  render() {
    const username = this.state.username;
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
export default LoginForm;
