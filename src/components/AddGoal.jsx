import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component{
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  addGoal = () => {
    console.log(this.state);
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({email, title})
  }
  render () {
    return (
      <div className='form-inline'>
        <div className='form-group'>
          <input style={{ margin: '5px', maxWidth: '70%', minWidth: '70%' }}
            type='text'
            placeholder='Add Goal'
            className='form-control'
            onChange={event => this.setState({title: event.target.value})}
          />
          <button style={{ margin: '5px' }}
            className='btn btn-success'
            onClick={this.addGoal}
          > ADD </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { user } = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(AddGoal);
