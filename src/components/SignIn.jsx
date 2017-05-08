import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
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

  signIn = () => {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
  }
  render () {
    return (
      <div className='form-inline' style={{margin: '5%'}}>
        <h2>Sign In</h2>
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
            onClick={this.signIn}
            className='btn btn-primary'>
            Sign In
          </button>
          <div>{this.state.error.message}</div>
          <div><Link to={'/signup'}>Sign up</Link></div>
        </div>
      </div>
    );
  }
};

export default SignIn;
