import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {shoppingTaskRef, homeTaskRef, schoolTaskRef, workTaskRef, otherTaskRef} from '../firebase';
import {setShoppingTasks, setSchoolTasks, setHomeTasks, setWorkTasks, setOtherTasks} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddTask from './AddTask.jsx';
import CompleteTaskList from './CompleteTaskList';
import TaskList from './TaskList';


class App extends Component {

  componentDidMount() {

    shoppingTaskRef.on('value', snapshot => {
      let shoppingTasks = [];
      snapshot.forEach(shoppingTask => {
        const {email, title, type} = shoppingTask.val();
        const serverKey = shoppingTask.key;
        shoppingTasks.push({email, title, type, serverKey});
      })
      this.props.setShoppingTasks(shoppingTasks);
    })

    schoolTaskRef.on('value', snapshot => {
      let schoolTasks = [];
      snapshot.forEach(schoolTask => {
        const {email, title, type} = schoolTask.val();
        const serverKey = schoolTask.key;
        schoolTasks.push({email, title, type, serverKey});
      })
      this.props.setSchoolTasks(schoolTasks);
    })

    homeTaskRef.on('value', snapshot => {
      let homeTasks = [];
      snapshot.forEach(homeTask => {
        const {email, title, type} = homeTask.val();
        const serverKey = homeTask.key;
        homeTasks.push({email, title, type, serverKey});
      })
      this.props.setHomeTasks(homeTasks);
    })

    workTaskRef.on('value', snapshot => {
      let workTasks = [];
      snapshot.forEach(workTask => {
        const {email, title, type} = workTask.val();
        const serverKey = workTask.key;
        workTasks.push({email, title, type, serverKey});
      })
      this.props.setWorkTasks(workTasks);
    })

    otherTaskRef.on('value', snapshot => {
      let otherTasks = [];
      snapshot.forEach(otherTask => {
        const {email, title, type} = otherTask.val();
        const serverKey = otherTask.key;
        otherTasks.push({email, title, type, serverKey});
      })
      this.props.setOtherTasks(otherTasks);
    })

  }

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
                <div className="ShoppingTaskList">
                  <h4>Shopping List</h4>
                  <TaskList taskRef={shoppingTaskRef} tasks={this.props.shoppingTasks} />
                </div>
                <hr />
                <div className="HomeTaskList">
                  <h4>Home</h4>
                  <TaskList taskRef={homeTaskRef} tasks={this.props.homeTasks} />
                </div>
                <hr />
                <div className="SchoolTaskList">
                  <h4>School</h4>
                  <TaskList taskRef={schoolTaskRef} tasks={this.props.schoolTasks} />
                </div>
                <hr />
                <div className="worklTaskList">
                  <h4>Work</h4>
                  <TaskList taskRef={workTaskRef} tasks={this.props.workTasks} />
                </div>
                <hr />
                <div className="otherTaskList">
                  <h4>Other</h4>
                  <TaskList taskRef={otherTaskRef} tasks={this.props.otherTasks} />
                </div>
                <hr />
                <h4>Completed Tasks</h4>
                <CompleteTaskList />
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
  const {shoppingTasks, schoolTasks, homeTasks, workTasks, otherTasks} = state;
  return {
    shoppingTasks,
    schoolTasks,
    homeTasks,
    workTasks,
    otherTasks
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setShoppingTasks, setSchoolTasks, setHomeTasks, setWorkTasks, setOtherTasks} ,dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
