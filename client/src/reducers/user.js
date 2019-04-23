import actionTypes from '../actions/actionTypes'

const initialState = {
  all: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return { ...state, login: true }
    default:
      return state
  }
}
