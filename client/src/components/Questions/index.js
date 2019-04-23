import React from 'react'
import { Route, Switch } from 'react-router-dom'
import QuestionList from './QuestionList'
import QuestionForm from './QuestionForm'
import CreateUserForm from './CreateUserForm'
import LoginForm from './LoginForm'
import NavBar from './NavBar'
import UserPage from './UserPage'

import './style.css'

const Questions = () => (
  <div className='questions'>
    <div className='questions__sticky'>
      <h1 className='text-center'>Questions</h1>
      <NavBar />
    </div>
    <Switch>
      <Route path='/' component={QuestionList} exact />
      <Route path='/create' component={QuestionForm} />
      <Route path='/login' component={LoginForm} />
      <Route path='/createUser' component={CreateUserForm} />
      <Route path='/userpage' component={UserPage} />
    </Switch>
  </div>
)

export default Questions
