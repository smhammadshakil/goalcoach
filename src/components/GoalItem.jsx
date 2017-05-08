import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completeGoalsRef } from '../firebase';

class GoalItem extends Component {

  completeGoal = () => {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalsRef.push({email, title});
  }

  render () {
    const { email, title } = this.props.goal;
    return (
      <div style={{padding: '0.5%'}}>
        <strong>{title}</strong> submitted by <em>{email}</em>
        <button
          onClick={this.completeGoal}
          style={{margin: '5px'}}
          className='btn btn-sm btn-primary'>
          Complete
        </button>
      </div>
    )
  }
}
function mapStateToProps (state) {
  const { user } = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(GoalItem);
