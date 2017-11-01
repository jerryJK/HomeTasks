import React, {Component} from 'react';
import {taskRef} from '../firebase';

class TasksList extends Component {

  componentDidMount() {
    taskRef.on('value', snapshot => {
      let tasks = [];
      snapshot.forEach(task => {
        const {email, title} = task.val();
        tasks.push({email, title});
      })
      console.log(tasks);
    })
  }


    render() {
      return (
        <div>TasksList</div>
      )
    }
}


export default TasksList;
