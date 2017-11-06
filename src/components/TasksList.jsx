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
        const {email, title, type} = task.val();
        const serverKey = task.key;
        tasks.push({email, title,type, serverKey});
      })
      tasks.sort((a, b) => {
        const genreA = a.type.toUpperCase();
        const genreB = b.type.toUpperCase();

        let comparison = 0;
        if (genreA > genreB) {
          comparison = 1;
        } else if (genreA < genreB) {
          comparison = -1;
        }
        return comparison;
      });
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
