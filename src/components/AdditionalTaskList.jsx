import React, {Component} from 'react';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import AdditionalTaskItem from './AdditionalTaskItem';


class AdditionalTaskList extends Component {


  deleteList(listKey) {
      firebase.database().ref('additionalLists/' +listKey).remove();
  }


  render() {
    return (
      <div key={this.props.key}>
        <h4>{this.props.name}</h4>
        <button onClick={() => this.deleteList(this.props.serverKey)}>remove list</button>
          {this.props.tasks&&this.props.tasks.map(task => {
              return (
                <AdditionalTaskItem key={task.key} task={task}/>
              )
          })}
        <hr />
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


export default connect(mapStateToProps, null)(AdditionalTaskList);
