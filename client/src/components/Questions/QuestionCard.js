import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../../actions/questions'

class QuestionCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      answer: null
    }
    this.onYesClicked = this.onYesClicked.bind(this);
    this.onNoClicked = this.onNoClicked.bind(this);
  }

  onYesClicked(){
    this.props.answerQuestion(this.props.question.question_id, this.props.userid, true)
    this.setState({
      answer: true
    })
  }

  onNoClicked(){
    this.setState({
      answer: false
    })
  }

  render() {
    const question = this.props.question
    console.log(question)
    var buttonPrompts;

    if (this.state.answer == null) {
      buttonPrompts = (
        <div>
          <button className='btn btn-success' style={{ marginRight: 10 }} onClick={this.onYesClicked}>Yes</button>
          <button className='btn btn-danger' onClick={this.onNoClicked}>No</button>
        </div>
      )
    } else if (this.state.answer){
      buttonPrompts = <div>You have answered Yes!</div>
    } else {
      buttonPrompts = <div>You have answered No!</div>
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

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
  username: user.username,
  userid: user.user_id
})

const mapDispatchToProps = {
  answerQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
