import { combineReducers } from 'redux'
import questions from './questions'
import user from './user'
import { connectRouter } from 'connected-react-router'

const reducers = history => combineReducers({
  questions,
  user,
  router: connectRouter(history)
})

export default reducers
