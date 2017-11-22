import React, {Component} from 'react';
import TaskItem from './TaskItem';


class TaskList extends Component {


  render() {
    return (
      <ul className="list-group">
        {
          this.props.tasks.map((task, index) => {
            return (
                <TaskItem key={index} task={task} taskRef={this.props.taskRef}/>
            )
          })
        }
      </ul>
      )
  }
}


export default TaskList;
