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
  }

  render() {
    const username = this.state.username;
    const password = this.state.password;
    const loginMsg = this.props.loginMsg;

    return (
      <form onSubmit={event => this.login(event)} className='login-form'>
        {loginMsg !== '' ? <h1>{loginMsg}</h1> : null}
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
        Login
        </button>
        <NavLink to='/createUser' className='nav-link' style={{ paddingLeft: 0 }}>New User? Create an account here.</NavLink>
      </form>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
  loginMsg: user.loginMsg
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
