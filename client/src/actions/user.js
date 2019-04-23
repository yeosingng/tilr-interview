import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const createUser = (user_id, displayName, password) => async (dispatch) => {
  try {
    console.log("hello?")
    const { user } = await axios.post('/users', {
      user_id: "user",
      name: "name",
      password: "password"
    });
    dispatch({ type: actionTypes.GET_USER, payload: user })
  } catch (err) {
    console.log(err)
  }
}
