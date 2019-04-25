import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, fetchAnswers } from '../../actions/questions'
import QuestionCard from './QuestionCard'
import LoginForm from './LoginForm'

class QuestionList extends Component {

  componentDidMount() {
    this.props.fetchQuestions()
    this.props.fetchAnswers()
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn

    if (isLoggedIn){
      return (
        <div className='question-list'>
          <h3>Recently Added</h3>
          {this.props.questions.map(question => (
            <QuestionCard key={question.question_id} question={question}/>
          ))}
        </div>
      )
    } else {
      return <LoginForm />
    }
  }
}

const mapStateToProps = ({ questions, user }) => ({
  questions: questions.all,
  answers: questions.answers,
  isLoggedIn: user.loggedIn
})

const mapDispatchToProps = {
  fetchQuestions,
  fetchAnswers
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
