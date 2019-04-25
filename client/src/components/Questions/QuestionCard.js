import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../../actions/questions'
import { Doughnut } from 'react-chartjs-2'
import CountUp from 'react-countup'

class QuestionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitTextOpen: false,
      answerText: ''
    }
    this.onAddTextClicked = this.onAddTextClicked.bind(this);
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
    console.log("clicked")
    this.setState({
      submitTextOpen: !this.state.submitTextOpen
    })
  }

  render() {
    const question = this.props.question
    const answers = this.props.answers.filter(answer => answer.question_id === question.question_id)
    const userAnswer = answers.filter(answer => answer.user_id === this.props.userid)
    const yesAnswers = answers.filter(answer => answer.is_yes === true).length
    const noAnswers = answers.filter(answer => answer.is_yes === false).length
    var yesPercentage;
    var noPercentage;

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

    const submitTextForm = (<form onSubmit={console.log("ok")} className='submitText-form'>
      <div>Text:</div>
      <input
        className='form-control'
        onChange={({ target }) => this.setState({ answerText: target.value })}
        style={{ marginBottom: 10 }}
      />
      <button
        className='btn btn-primary'
        type='submit'
      >
      Submit
      </button>
    </form>)

    console.log(this.state.answerText)

    return (
      <div className='card'>
        <div className='card-body'>
          <div className='card-content'>
            <h5 className='card-title'>{question.text}</h5>
            <div className='button-container'>
              <button className='btn btn-success' disabled={disableYes} style={{ marginRight: 10 }} onClick={event => this.onYesClicked(event)}>Yes</button>
              <button className='btn btn-danger' disabled={disableNo} onClick={event => this.onNoClicked(event)}>No</button>
            </div>
            {userAnswer.length !== 0 ? <div className="" style={{ marginTop: 10, color: '#007bff' }} onClick={this.onAddTextClicked}>{this.state.submitTextOpen ? "Hide" : "Add Text"}</div> : null}
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
        {this.state.submitTextOpen ? submitTextForm: null}
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
