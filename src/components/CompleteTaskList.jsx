import React, {Component} from 'react';
import {completeTaskRef} from '../firebase';
import {setCompleted} from '../actions';
import {connect} from 'react-redux';


class CompleteTaskList extends Component {

  componentDidMount() {
    completeTaskRef.on('value', snapshot => {
      let completedTasks = [];
      snapshot.forEach(completedTask => {
        const {email, title} = completedTask.val();
        completedTasks.push({email, title});
      })
      // console.log(completedTasks);
      this.props.setCompleted(completedTasks);

    })
  }

  clearCompleted() {
    completeTaskRef.set([]);
  }

  render() {
    console.log('this.props.completedTask', this.props.completedTasks);
    return (
      <div>
        {
          this.props.completedTasks.map((completedTask, index) => {
            const {title, email} = completedTask;
            return (
              <div style={{margin: '10px'}} key={index}>
                <strong>{title}</strong>
                <span><em> ({email})</em></span>
              </div>
            )
          })
        }
        <button
          style={{margin:'5px'}}
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Clear
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
