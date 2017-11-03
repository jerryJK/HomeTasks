import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
import AddTask from './AddTask.jsx';
import TasksList from './TasksList.jsx';


class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

    render() {
      //  console.log('this.props state', this.props.state);
        return (
            <div className="app" style={{margin:'10px'}}>
                <h3>Home Tasks</h3>
                <br />
                <AddTask />
                <hr />
                <h4>Tasks to do</h4>
                <TasksList />
                <hr />
                <button
                  className="btn btn-danger"
                  onClick={() => this.signOut()}
                >
                  SignOut
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state', state);
    return {}
}


export default connect(mapStateToProps, null)(App);
