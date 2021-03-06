import React, {Component} from 'react';
import {completeTaskRef} from '../firebase';


class CompleteTaskItem extends Component {

  removeCompletedTask() {
    const {serverKey} = this.props.completedTask;
    completeTaskRef.child(serverKey).remove();
  }


  render() {
    // console.log('this.props.task', this.props.task);
    const {title, email, type} = this.props.completedTask;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div><strong>{title}</strong></div>
        <div>
          <span>{type} |</span>
          <span style={{marginLeft:'5px'}}><em>done by</em></span>
          <span style={{marginLeft:'5px'}} className="glyphicon glyphicon-user" aria-hidden="true"></span>
          <span style={{marginLeft:'5px'}}>({email})</span>
          <button
            style={{marginLeft:'15px'}}
            className="btn btn-xs btn-primary"
            onClick={() => this.removeCompletedTask()}
          >
          Remove
          </button>
        </div>
      </li>
    )
  }
}



export default CompleteTaskItem;
