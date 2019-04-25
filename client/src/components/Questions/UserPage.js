import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, fetchAnswers } from '../../actions/questions'
import QuestionCard from './QuestionCard'

class UserPage extends Component {

  componentDidMount() {
    this.props.fetchQuestions()
    this.props.fetchAnswers()
  }

  render() {
    const answeredQuestionsId = this.props.answers
                                  .filter(answer => answer.user_id === this.props.userid)
                                  .map(answer => answer.question_id);

    const answeredQuestions = this.props.questions.filter(question => answeredQuestionsId.includes(question.question_id ))
    return (
      <div>
        <h2>You are logged in as {this.props.username}</h2>
          <div className='question-list'>
            <h3>Answered Questions</h3>
            {answeredQuestions.map(question => (
              <QuestionCard key={question.question_id} question={question}/>
            ))}
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, user }) => ({
  username: user.username,
  questions: questions.all,
  answers: questions.answers,
  userid: user.user_id,
})

const mapDispatchToProps = {
  fetchQuestions,
  fetchAnswers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
