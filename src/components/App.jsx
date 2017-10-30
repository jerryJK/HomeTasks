import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
import AddTask from './AddTask.jsx';


class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

    render() {
      //  console.log('this.props state', this.props.state);
        return (
            <div className="app">
                <h3>Home Tasks</h3>
                <AddTask />
                <div>Tasks list</div>
                <button
                  className="btn ntn-danger"
                  onClick={() => this.signOut()}
                >
                  SignOut
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
      state
    }
}


export default connect(mapStateToProps, null)(App);
