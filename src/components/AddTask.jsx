import React, {Component} from 'react';
import {taskRef} from '../firebase';
import {connect} from 'react-redux';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: 'shoppingList'
    }
  }

  addTask(){
    const {title, type} = this.state;
    const {email} = this.props.user;
    taskRef.push({email, title, type});
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add task"
            className="form-control"
            onChange={event => this.setState({title: event.target.value})}
          />
          <select
            value={this.state.type}
            className="form-control"
            onChange={event => this.setState({type: event.target.value})}
            >
            <option value="shoppingList">shopping list</option>
            <option value="home">home</option>
            <option value="school">school</option>
            <option value="work">work</option>
          </select>
          <button
            style={{margin:'5px'}}
            className="btn btn-success"
            type="button"
            onClick={() => this.addTask()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return{
    user
  }
}

export default connect(mapStateToProps, null)(AddTask);
