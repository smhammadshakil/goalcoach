import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { firebaseApp } from './firebase';
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import  reducer  from './reducers';
import { logUser } from './actions/index';
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user =>{
  if (user) {
    console.log('cool', user);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  } else {
    console.log('not cool');
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <div>
        <Route path="/app" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </div>
    </Router>
  </Provider>
   , document.getElementById('root')
);
