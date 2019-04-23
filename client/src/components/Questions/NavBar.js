import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {

  render() {
    if (this.props.loggedIn){
      return (
        <ul className='nav nav-pills questions__nav'>
          <li className='nav-item'><NavLink to='/userpage' className='nav-link'>{this.props.username}</NavLink></li>
          <li className='nav-item'><NavLink to='/' className='nav-link' exact>Home</NavLink></li>
          <li className='nav-item'><NavLink to='/create' className='nav-link'>Create</NavLink></li>
        </ul>
      )
    } else {
      return (
        <ul className='nav nav-pills questions__nav'>
          <li className='nav-item'><NavLink to='/login' className='nav-link'>Login</NavLink></li>
          <li className='nav-item'><NavLink to='/' className='nav-link' exact>Home</NavLink></li>
          <li className='nav-item'><NavLink to='/create' className='nav-link'>Create</NavLink></li>
        </ul>
      )
    }
  }
}

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
  username: user.username
})

export default connect(mapStateToProps, null)(NavBar)
