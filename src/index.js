import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import styles from './index.scss';


firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('user has signed in', user);
  } else {
    console.log('user has signed out or still need to sign in');
  }
})


document.addEventListener('DOMContentLoaded', function(e) {
    ReactDOM.render(
          <Router path="/" history={browserHistory} >
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Router>,
        document.getElementById('root')
      )
});
