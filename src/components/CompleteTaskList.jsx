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
        const {email, title} = completedTask.val();
        const serverKey = completedTask.key;
        completedTasks.push({email, title, serverKey});
      })
      // console.log(completedTasks);
      this.props.setCompleted(completedTasks);

    })
  }

  removeCompleted() {
    completeTaskRef.set([]);
  }

  render() {
    // console.log('this.props.completedTask', this.props.completedTasks);
    return (
      <div>
        {
          this.props.completedTasks.map((completedTask, index) => {
            return (
                <CompleteTaskItem key={index} completedTask={completedTask}/>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.removeCompleted()}
        >
          Remove all
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
