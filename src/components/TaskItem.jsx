import React, {Component} from 'react';
import {completeTaskRef} from '../firebase';
import {connect} from 'react-redux';

class TaskItem extends Component {

  completeTask() {
    const {email} = this.props.user;
    const {title, type, serverKey} = this.props.task;
    this.props.taskRef.child(serverKey).remove();
    completeTaskRef.push({email, title, type});
  }


  render() {
    const {title, email} = this.props.task;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div><strong>{title}</strong></div>
        <div>
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
            <span style={{marginLeft:'5px'}}><em> ({email})</em></span>
            <button
              style={{marginLeft:'15px'}}
              className="btn btn-xs btn-primary"
              onClick={() => this.completeTask()}
            >
            Complete
            </button>
        </div>
      </li>
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
