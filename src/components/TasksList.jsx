import React, {Component} from 'react';
import {connect} from 'react-redux';
import {taskRef} from '../firebase';
import {setTasks} from '../actions';
import TaskItem from './TaskItem';

class TasksList extends Component {

  componentDidMount() {
    taskRef.on('value', snapshot => {
      let tasks = [];
      snapshot.forEach(task => {
        const {email, title} = task.val();
        tasks.push({email, title});
      })
      // console.log(tasks);
      this.props.setTasks(tasks);
    })
  }


render() {
    console.log('this.props.tasks', this.props.tasks);
    return (
        <div>
            {
              this.props.tasks.map((task, index) => {
                return (
                    <TaskItem key={index} task={task}/>
                )
              })
            }
        </div>
    )
}

}

function mapStateToProps(state) {
  const {tasks} = state;
  return {
    tasks
  }
}


export default connect(mapStateToProps, {setTasks})(TasksList);
