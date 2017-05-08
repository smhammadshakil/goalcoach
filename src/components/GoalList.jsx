import React, { Component } from 'react';
import { goalRef, completeGoalsRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals, setcompleteGoals } from '../actions';
import GoalItem from './GoalItem';
import CompleteGoalItem from './CompleteGoalItem';

class GoalList extends Component{
  componentDidMount () {
    goalRef.on('value', snap => {
      let goals= [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey});
      })
      this.props.setGoals(goals);
    });
    completeGoalsRef.on('value', snap => {
      let completeGoals= [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        const serverKey = completeGoals.key;
        completeGoals.push({email, title, serverKey});
      })
      console.log(completeGoals);
      this.props.setcompleteGoals(completeGoals);
    });
  }
  render () {
    return (
      <div>
        <h3>Goals</h3>
        <div className='form-inline'>
          {
            this.props.goals.map((goal, index) => {
              return <GoalItem key={index} goal={goal}/>
            })
          }
        </div>
        <h3>Completed Goals</h3>
        <div className='form-inline'>
          {
            this.props.completeGoals.map((goal, index) => {
              return <CompleteGoalItem key={index} goal={goal}/>
            })
          }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { goals, completeGoals } = state;
  return {
    goals,
    completeGoals
  }
}
export default connect(mapStateToProps, { setGoals, setcompleteGoals})(GoalList);
