import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompleteGoalItem extends Component {

  render () {
    const { email, title } = this.props.goal;
    return (
      <div style={{padding: '0.5%'}}>
        <strong>{title}</strong> submitted by <em>{email}</em>
      </div>
    )
  }
}

export default connect(null, null)(CompleteGoalItem);
