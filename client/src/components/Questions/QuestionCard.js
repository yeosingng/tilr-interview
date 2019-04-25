import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestion, addTextToAnswer } from '../../actions/questions'
import { Doughnut } from 'react-chartjs-2'
import CountUp from 'react-countup'
import CommentList from './CommentList'

class QuestionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitTextOpen: false,
      answerText: '',
      showAnswersIsOpen: false
    }
    this.onAddTextClicked = this.onAddTextClicked.bind(this);
    this.toggleShowComments = this.toggleShowComments.bind(this);
  }

  onYesClicked(event){
    event.preventDefault()
    this.props.answerQuestion(this.props.question.question_id, this.props.userid, true)
  }

  onNoClicked(event){
    event.preventDefault()
    this.props.answerQuestion(this.props.question.question_id, this.props.userid, false)
  }

  onAddTextClicked(){
    this.setState({
      submitTextOpen: !this.state.submitTextOpen
    })
  }

  submitTextComment(event){
    event.preventDefault()
    this.props.addTextToAnswer(this.props.question.question_id, this.props.userid, this.state.answerText)
    this.setState({
      answerText: ''
    })
  }

  toggleShowComments(){
    this.setState({
      showAnswersIsOpen: !this.state.showAnswersIsOpen
    })
  }

  render() {
    const question = this.props.question
    const answers = this.props.answers.filter(answer => answer.question_id === question.question_id)
    const userAnswer = answers.filter(answer => answer.user_id === this.props.userid)
    const yesAnswers = answers.filter(answer => answer.is_yes === true).length
    const noAnswers = answers.filter(answer => answer.is_yes === false).length
    const textComments = answers.filter(answer => answer.text !== "")
    var yesPercentage;
    var noPercentage;

    console.log(userAnswer)
    console.log(textComments)
    if (answers.length === 0){
      yesPercentage = 0;
      noPercentage = 0;
    } else {
      yesPercentage = (yesAnswers / answers.length) * 100;
      noPercentage = (noAnswers / answers.length) * 100;
    }

    var disableYes = false
    var disableNo = false

    if (userAnswer.length !== 0) {
      if (userAnswer[0].is_yes){
        disableYes = true
      } else {
        disableNo = true
      }
    }

    const chartData = {
        labels: ["Yes", "No"],
        datasets: [
          {
            data: [yesAnswers, noAnswers ],
            backgroundColor: [
                    "#28A745",
                    "#DC3545",
                ]
          }
        ]
    }

    const submitTextForm = (<form onSubmit={event => this.submitTextComment(event)} className='submitText-form'>
      <div>Your Answer:</div>
      <input
        className='form-control'
        onChange={({ target }) => this.setState({ answerText: target.value })}
        style={{ marginBottom: 10 }}
        value={this.state.answerText}
      />
      <button
        className='btn btn-primary'
      >
      Submit
      </button>
    </form>)

    return (
      <div className='card'>
        <div className='card-body'>
          <div className='card-content'>
            <h5 className='card-title'>{question.text}</h5>
            <div className='button-container'>
              <button className='btn btn-success' disabled={disableYes} style={{ marginRight: 10 }} onClick={event => this.onYesClicked(event)}>Yes</button>
              <button className='btn btn-danger' disabled={disableNo} onClick={event => this.onNoClicked(event)}>No</button>
            </div>
            {userAnswer.length !== 0 ?
               <div className="" style={{ marginTop: 10, color: '#007bff' }} onClick={this.onAddTextClicked}>{this.state.submitTextOpen ? "Hide Submit" : "Add Text"}</div>
               : null
            }
            {userAnswer.length !== 0 ?
               <div className="" style={{ marginTop: 10, color: '#007bff' }} onClick={this.toggleShowComments}>{this.state.showAnswersIsOpen ? "Hide Answers" : "Show Answers"}</div>
               : null
            }
          </div>
          <div className='filler'></div>
          <div className='data-container'>
            <div className="percentages-container">
              <CountUp start={0} end={yesPercentage} style={{ marginBottom: 10 }} prefix="Yes: " suffix="%" />
              <CountUp start={0} end={noPercentage} prefix="No: " suffix="%"/>
            </div>
            <Doughnut data={chartData} options={{responsive: false, maintainAspectRatio: false, legend: {display: false}}} />
          </div>
        </div>
        <div className='text-answers'>
          {this.state.submitTextOpen ? submitTextForm: null}
          {this.state.showAnswersIsOpen ? <CommentList answers={textComments} /> : null}
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
  answerQuestion,
  addTextToAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
