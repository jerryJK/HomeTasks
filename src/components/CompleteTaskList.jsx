import React, {Component} from 'react';
import {completeTaskRef} from '../firebase';
import {setCompleted} from '../actions';
import {connect} from 'react-redux';
import CompleteTaskItem from './CompleteTaskItem';


class CompleteTaskList extends Component {

  componentDidMount() {
    completeTaskRef.on('value', snapshot => {
      let completedTasks = [];
      snapshot.forEach(completedTask => {
        const {email, title, type} = completedTask.val();
        const serverKey = completedTask.key;
        completedTasks.push({email, title, type, serverKey});
      })
      // console.log(completedTasks);
      this.props.setCompleted(completedTasks);

    })
  }

  removeTask() {
    console.log('remove');
  }

  clearCompleted() {
    completeTaskRef.set([]);
  }

  render() {
    //console.log('this.props.completedTask', this.props.completedTasks);
    return (
      <div>
        <ul className="list-group" >
          {
            this.props.completedTasks.map((completedTask, index) => {
              return (
                  <CompleteTaskItem key={index} completedTask={completedTask}/>
              )
            })
          }
        </ul>
        <button
          style={{marginTop:"10px"}}
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Remove All
        </button>
      </div>
      )
  }
}

function mapStateToProps(state) {
  const {completedTasks} = state;
  return {
    completedTasks
  }
}

export default connect(mapStateToProps, {setCompleted})(CompleteTaskList);
