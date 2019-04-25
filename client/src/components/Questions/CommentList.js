import React, { Component } from 'react'

class CommentList extends Component {

  render() {
    return (
      <div className='comment-list'>
        <h4>Answers</h4>
        {this.props.answers.map(answer => (
          <div className='comment' key={answer.user_id}>{answer.text}</div>
        ))}
      </div>
    )
  }
}

export default CommentList;
