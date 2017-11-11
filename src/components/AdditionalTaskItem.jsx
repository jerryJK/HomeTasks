import React, {Component} from 'react';
import {completeTaskRef} from '../firebase';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

class AdditionalTaskItem extends Component {


  completeItem(listName, taskName, taskKey) {
      const {email} = this.props.user;
      let name = listName.split(" ")[1];
      let type = listName.split(" ")[0];
      let title = taskName;
      firebase.database().ref('additionalLists/' + name + '/tasks/' + taskKey).remove();
      completeTaskRef.push({email, title, type});
  }


  render() {

    return (
      <div key={this.props.task.key} style={{margin:'10px'}}>
        <strong>{this.props.task.title}</strong>
        <span><em> ({this.props.task.email})</em></span>
        <button
          style={{margin:'5px'}}
          className="btn btn-xs btn-primary"
          onClick={() => this.completeItem(this.props.task.type, this.props.task.title, this.props.task.key)}
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


export default connect(mapStateToProps, null)(AdditionalTaskItem);
