import React, {Component} from 'react';
import {shoppingTaskRef, schoolTaskRef, homeTaskRef, workTaskRef, otherTaskRef} from '../firebase';
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

    if(type === 'school'){
        schoolTaskRef.push({email, title, type});
    } else if(type === 'home') {
        homeTaskRef.push({email, title, type});
    } else if(type === 'work') {
        workTaskRef.push({email, title, type});
    } else if(type === 'shoppingList') {
        shoppingTaskRef.push({email, title, type});
    } else if(type === 'other') {
        otherTaskRef.push({email, title, type});
    }

  }


  render() {
    // console.log('selected value',this.state.type);
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Task name"
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
            <option value="other">other</option>
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
