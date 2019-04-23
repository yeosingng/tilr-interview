import axios from '../services/axios'
import actionTypes from './actionTypes'

export const createUser = (username, password) => async (dispatch) => {
  try {
    const { user } = await axios.post('/users', {
      name: username,
      password: password
    });
    dispatch({ type: actionTypes.GET_USER, payload: user })
  } catch (err) {
    console.log(err)
  }
}

export const login = (username, password) => async(dispatch) => {
  try {
    const msg = await axios.post('/login', {
        name: username,
        password: password
    });

    dispatch({ type: actionTypes.USER_LOGIN, payload: msg })
  } catch (err) {
    console.log(err)
  }
}
