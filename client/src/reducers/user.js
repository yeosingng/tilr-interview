import actionTypes from '../actions/actionTypes'

const initialState = {
  loggedIn: false,
  username: ''
}

export default (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case actionTypes.USER_LOGIN:



      return { ...state, loggedIn: true, username: action.payload.data.user }
    default:
      return state
  }
}
