import React, { Component } from 'react'

class QuestionBody extends Component {

  constructor(props){
    super(props);
    this.state = {
      answer: null
    }
    this.onYesClicked = this.onYesClicked.bind(this);
    this.onNoClicked = this.onNoClicked.bind(this);
  }

  onYesClicked(){
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
    if (this.state.answer == null) {
      return (<div className='card-body'>
                <button className='btn btn-success' style={{ marginRight: 10 }} onClick={this.onYesClicked}>Yes</button>
                <button className='btn btn-danger' onClick={this.onNoClicked}>No</button>
              </div>
            );
    } else if (this.state.answer){
      return <div>You have answered yes</div>
    } else {
      return <div>You have answered no</div>
    }
  }
}
export default QuestionBody;
