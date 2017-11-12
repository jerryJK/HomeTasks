import React, {Component} from 'react';
import {completeTaskRef} from '../firebase';
import {connect} from 'react-redux';

class TaskItem extends Component {

  completeTask() {
    const {email} = this.props.user;
    const {title, type, serverKey} = this.props.task;
    //console.log('email', email, 'title',title);
    this.props.taskRef.child(serverKey).remove();
    completeTaskRef.push({email, title, type});
  }


  render() {
    const {title, email} = this.props.task;

    return (
      <div style={{margin:'0 10px 0 10px',padding:"10px", backgroundColor:'white', borderBottom:"1px solid lightgrey"}} className="row panel">
        <strong>{title}</strong>
        <div className="pull-right">
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
