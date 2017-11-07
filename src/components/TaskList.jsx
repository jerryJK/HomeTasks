import React, {Component} from 'react';
import TaskItem from './TaskItem';


class TaskList extends Component {


  render() {
    return (
      <div>
        {
          this.props.tasks.map((task, index) => {
            return (
                <TaskItem key={index} task={task} taskRef={this.props.taskRef}/>
            )
          })
        }
        </div>
      )
  }
}


export default TaskList;
