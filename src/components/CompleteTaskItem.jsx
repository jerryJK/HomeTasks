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
      <div style={{margin: '10px'}}>
        <strong>{title}</strong>
        <span><em> (done by {email})</em></span>
        <span style={{margin:'10px'}}className="bg-danger">{type}</span>
        <button
          style={{margin:'5px'}}
          className="btn btn-xs btn-primary"
          onClick={() => this.removeCompletedTask()}
        >
        Remove
        </button>
      </div>
    )
  }
}



export default CompleteTaskItem;
