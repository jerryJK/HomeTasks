import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';


class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    // console.log("this state", this.state);
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

    render() {
        return (
            <div className="form" style={{margin:'10px'}}>
              <h2>Sign In</h2>
              <div className="form-inline">
                <input
                  className="form-control"
                  type="text"
                  placeholder="email"
                  onChange={event => this.setState({email: event.target.value})}
                />
                <input
                  className="form-control"
                  type="password"
                  placeholder="password"
                  onChange={event => this.setState({password: event.target.value})}
                />
                <button
                  className="btn btn-primary"
                  type="text"
                  onClick={() => this.signIn()}
                >
                  Sign In
                </button>
              </div>
              <div>{this.state.error.message}</div>
              <div><Link to={'/signup'}>Sign up instead</Link></div>
              <div><Link to={'/forgot_password'}>Forgot your password?</Link></div>
            </div>
        )
    }
}


export default SignIn;
