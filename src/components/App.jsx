import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {shoppingTaskRef, homeTaskRef, schoolTaskRef, workTaskRef, additionalListsRef} from '../firebase';
import {setShoppingTasks, setSchoolTasks, setHomeTasks, setWorkTasks, setAdditionalLists} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddTask from './AddTask.jsx';
import CompleteTaskList from './CompleteTaskList';
import AdditionalTaskList from './AdditionalTaskList';
import TaskList from './TaskList';



class App extends Component {


  componentDidMount() {


    this.setDefaultList(shoppingTaskRef,this.props.setShoppingTasks);
    this.setDefaultList(homeTaskRef,this.props.setHomeTasks);
    this.setDefaultList(schoolTaskRef,this.props.setSchoolTasks);
    this.setDefaultList(workTaskRef,this.props.setWorkTasks);


    additionalListsRef.on('value', snapshot => {
        let lists = [];
        snapshot.forEach(list => {
            if(list.val().tasks === undefined) {
              lists.push({name:Object.values(list.val())[1], key: list.key});
            } else {
              let tasks = Object.values(list.val().tasks);
              let keys = Object.keys(list.val().tasks);
              tasks.forEach((elem,index) => {
                  elem.key = keys[index];
              })
              lists.push({name:Object.values(list.val())[1], key: list.key, tasks:tasks});
            }
        })
          this.props.setAdditionalLists(lists);
    })

  }



  setDefaultList(ref, refAction) {
    ref.on('value', snapshot => {
      let tasks = [];
      snapshot.forEach(task => {
        const {email, title, type} = task.val();
        const serverKey = task.key;
        tasks.push({email, title, type, serverKey});
      })
      refAction(tasks);
    })
  }


  signOut() {
    firebaseApp.auth().signOut();
  }


  render() {

        //console.log('state.additionalLists', this.props.additionalLists);

        return (
            <div className="container col-sm-6 col-sm-offset-3" >
                <h2 className="title col-sm-8 col-sm-offset-2 text-center font-weight-bold"><b>Home Tasks</b></h2>
                <div className="row" style={{marginBottom: "30px"}}>
                  <AddTask />
                </div>
                <h4><b>Lists</b></h4>
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
                {this.props.additionalLists.map(elem => {
                  return (
                    <AdditionalTaskList
                      key={elem.key}
                      serverKey={elem.key}
                      name={elem.name}
                      tasks={elem.tasks}
                    />
                   )
                })}
                <h4><b>Completed Tasks</b></h4>
                <CompleteTaskList />
                <hr />
                <button
                  style={{marginBottom: '20px'}}
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
  const {shoppingTasks, schoolTasks, homeTasks, workTasks, additionalLists, user} = state;
  return {
    shoppingTasks,
    schoolTasks,
    homeTasks,
    workTasks,
    additionalLists,
    user
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setShoppingTasks, setSchoolTasks, setHomeTasks, setWorkTasks, setAdditionalLists} ,dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
