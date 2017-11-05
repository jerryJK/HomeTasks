import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import {Router, Route, browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import {logUser} from './actions';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import styles from './index.scss';


firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    // console.log('user has signed in', user);
    browserHistory.push('/app');
    const {email} = user;
    store.dispatch(logUser(email));
  } else {
    // console.log('user has signed out or still need to sign in');
    browserHistory.replace('/signin');
  }
})

const store = createStore(reducer);


document.addEventListener('DOMContentLoaded', function(e) {
    ReactDOM.render(
        <Provider store={store}>
          <Router path="/" history={browserHistory} >
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot_password" component={ForgotPassword} />
          </Router>
        </Provider>,
        document.getElementById('root')
      )
});
