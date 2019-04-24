import actionTypes from '../actions/actionTypes'

const initialState = {
  all: [],
  answers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUESTIONS_FETCH_ALL:
      return { ...state, all: action.payload }
    case actionTypes.ANSWERS_FETCH_ALL:
      return { ...state, answers: action.payload }
    case actionTypes.QUESTION_ANSWERED:
      return { ...state, answers: action.payload }
    default:
      return state
  }
}
