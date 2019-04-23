import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>You are logged in as {this.props.username} !</h3>
        <button className='btn btn-primary'>
        Logout
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
  username: user.username
})

export default connect(mapStateToProps)(UserPage)
