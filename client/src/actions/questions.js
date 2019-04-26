import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const fetchQuestions = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/questions')
    dispatch({ type: actionTypes.QUESTIONS_FETCH_ALL, payload: data.reverse() })
  } catch (err) {
    console.log(err)
  }
}

export const createQuestion = text => async (dispatch) => {
  try {
    const { data } = await axios.post('/questions', { text })
    dispatch({ type: actionTypes.QUESTIONS_CREATE, payload: data })
    dispatch(push('/'))
  } catch (err) {
    console.log(err)
  }
}

export const answerQuestion = (question_id, user_id, is_yes) => async (dispatch) => {
  try {
    const { data } = await axios.put('/questions/answers', { question_id, user_id, is_yes })
    dispatch({ type: actionTypes.QUESTION_ANSWERED, payload: data })
  } catch (err) {
    console.log(err)
  }
}

export const fetchAnswers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/questions/answers')
    dispatch({ type: actionTypes.ANSWERS_FETCH_ALL, payload: data.reverse() })
  } catch (err) {
    console.log(err)
  }
}

export const addTextToAnswer = (question_id, user_id, answer_text) => async (dispatch) => {
  try {
    console.log("aaaaaaaaa")
    const { data } = await axios.put('/questions/answers/text', { question_id, user_id, answer_text })
    dispatch({ type: actionTypes.QUESTION_ANSWERED, payload: data.reverse() })
  } catch (err) {
    console.log(err)
  }
}
