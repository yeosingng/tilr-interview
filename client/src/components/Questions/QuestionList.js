import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../actions/questions'
import QuestionCard from './QuestionCard'

class QuestionList extends Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn

    return (
      <div className='question-list'>
        <h3>Recently Added</h3>
        {this.props.questions.map(question => (
          <QuestionCard key={question.question_id} question={question}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ questions, user }) => ({
  questions: questions.all,
  isLoggedIn: user.loggedIn
})

const mapDispatchToProps = {
  fetchQuestions
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
