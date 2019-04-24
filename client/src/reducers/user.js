import actionTypes from '../actions/actionTypes'

const initialState = {
  loggedIn: false,
  username: '',
  loginMsg: null,
  user_id: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
        return { ...state, loggedIn: true, username: action.payload.data.user, user_id: action.payload.data.user_id }
    case actionTypes.LOGIN_FAILED:
        return { ...state, loginMsg: "Username or Password is incorrect." }
    default:
      return state
  }
}
