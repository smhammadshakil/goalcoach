import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';

import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {

  signOut = () => {
    firebaseApp.auth().signOut();
  }
  render () {
    return (
      <div style={{padding: '2%'}}>
        <button style={{float:'right'}} className='btn btn-danger' onClick={this.signOut}>SignOut</button>
        <h2>Goal Coach</h2>
        <AddGoal />
        <hr />
        <GoalList />
      </div>
    );
  }
};
function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, null)(App);
