import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestion, fetchAnswers } from '../../actions/questions'

class QuestionCard extends Component {

  constructor(props){
    super(props);
    this.onYesClicked = this.onYesClicked.bind(this);
    this.onNoClicked = this.onNoClicked.bind(this);
  }

  onYesClicked(event){
    event.preventDefault()
    this.props.answerQuestion(this.props.question.question_id, this.props.userid, true)
  }

  onNoClicked(event){
    event.preventDefault()
    this.props.answerQuestion(this.props.question.question_id, this.props.userid, false)
  }

  render() {
    const question = this.props.question
    const answers = this.props.answers.filter(answer => answer.question_id === question.question_id)
    const userAnswer = answers.filter(answer => answer.user_id === this.props.userid)

    var buttonPrompts;

    if (userAnswer.length === 0) {
      buttonPrompts = (
        <div>
          <button className='btn btn-success' style={{ marginRight: 10 }} onClick={this.onYesClicked}>Yes</button>
          <button className='btn btn-danger' onClick={event => this.onNoClicked(event)}>No</button>
        </div>
      )
    } else {
      if (userAnswer[0].is_yes){
        buttonPrompts = <div>You have answered Yes!</div>
      } else {
        buttonPrompts = <div>You have answered No!</div>
      }
    }

    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{question.text}</h5>
          {buttonPrompts}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, user }) => ({
  loggedIn: user.loggedIn,
  userid: user.user_id,
  answers: questions.answers
})

const mapDispatchToProps = {
  answerQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
