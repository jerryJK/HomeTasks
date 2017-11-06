import React, {Component} from 'react';
import {completeTaskRef} from '../firebase';
import {taskRef} from '../firebase';
import {connect} from 'react-redux';

class TaskItem extends Component {

  completeTask() {
    const {email} = this.props.user;
    const {title, type, serverKey} = this.props.task;
    // console.log('email', email, 'title',title);
    taskRef.child(serverKey).remove();
    completeTaskRef.push({email, title, type});
  }


  render() {
    // console.log('this.props.task', this.props.task);
    const {title, email, type} = this.props.task;
    return (
      <div style={{margin:'10px'}}>
        <strong>{title}</strong>
        <span><em> ({email})</em></span>
        <span style={{margin:'10px'}}className="bg-danger">{type}</span>
        <button
          style={{margin:'5px'}}
          className="btn btn-xs btn-primary"
          onClick={() => this.completeTask()}
        >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  }
}


export default connect(mapStateToProps, null)(TaskItem);
