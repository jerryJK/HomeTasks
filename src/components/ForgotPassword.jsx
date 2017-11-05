import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      reset: false,
      error: {
        message: ''
      }
    }
  }

  resetPassword() {
    // console.log("this state", this.state);
    const {email} = this.state;
    firebaseApp.auth().sendPasswordResetEmail(email)
    .then(() => {
      this.setState({
        reset: true
      })
      // Password reset email sent.
    })
    .catch((error) => {
      // Error occurred. Inspect error.code.
      this.setState({error})
    });
  }

    render() {
        return (
            <div className="form-inline" style={{margin:'10px'}}>
              <h2>Reset password</h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="email"
                  onChange={event => this.setState({email: event.target.value})}
                />
                <button
                  className="btn btn-primary"
                  type="text"
                  onClick={() => this.resetPassword()}
                >
                  Reset
                </button>
              </div>
              <div>{(!this.state.reset)&&this.state.error.message}</div>
              <div style={{color:"green"}}>{(this.state.reset)&&"password reset email has been sent"}</div>
              <div><Link to={'/signin'}>Sign in instead</Link></div>
            </div>
        )
    }
}


export default SignUp;
