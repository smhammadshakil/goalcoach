import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp = () => {
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
  }
  render () {
    return (
      <div className='form-inline' style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className='form-group'>
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='email'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='password'
            placeholder='password'
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            style={{marginRight: '5px', marginTop: '5px'}}
            onClick={this.signUp}
            className='btn btn-primary'>
            Sign Up
          </button>
          <div>{this.state.error.message}</div>
          <div><Link to={'/signin'}>Sign In</Link></div>
        </div>
      </div>
    );
  }
};

export default SignUp;
