import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { login } from '../../actions/user'

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state = ({
      username: '',
      password: ''
    })
  }

  login(event) {
    event.preventDefault()
    this.props.login(this.state.username, this.state.password)
    console.log(this.props.login)
  }

  render() {
    const username = this.state.username;
    const password = this.state.password;

    return (
      <form onSubmit={event => this.login(event)} className='login-form'>
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

        <NavLink to='/createUser' className='nav-link'>New User? Create an account here.</NavLink>
      </form>

    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginForm)
