import React, {Component} from 'react';
import {shoppingTaskRef, schoolTaskRef, homeTaskRef, workTaskRef, additionalListsRef} from '../firebase';
import {connect} from 'react-redux';
import * as firebase from 'firebase';


class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: 'list type',
      listTitle: '',
      key: '',
      taskNameValid: true,
      listNameValid: true
    }
  }

  addTask() {
    const {title, type, key} = this.state;
    const {email} = this.props.user;

    if (title.length !== 0) {

      this.setState({
        taskNameValid: true
      })

        if (type === 'school') {
            schoolTaskRef.push({email, title, type});
        } else if (type === 'home') {
            homeTaskRef.push({email, title, type});
        } else if (type === 'work') {
            workTaskRef.push({email, title, type});
        } else if (type === 'shoppingList') {
            shoppingTaskRef.push({email, title, type});
        } else if (type === 'list type') {
            return false;
        } else {
            this.props.additionalLists.forEach(elem => {
                if (elem.name === this.state.type.split("|")[0]) {
                    firebase.database().ref('additionalLists/' + key + "/tasks").push({email, title, type});
                } else {
                    return false;
                }
            })
        }
    } else {
      this.setState({
        taskNameValid: false
      })
    }

  }


  addList() {
    let id = Math.ceil(Math.random()*100000);

    if (this.state.listTitle.length !== 0) {
      additionalListsRef.push({name:this.state.listTitle, id});
      this.setState({
        listNameValid: true
      })
    } else {
      this.setState({
        listNameValid: false
      })
    }

  }

  selectChange(event) {
    let key;
    this.setState({type: event.target.value})
    if(event.target.value.split("|").length > 1) {
      key = event.target.value.split("|")[1];
      this.setState({key})
    } else {
      this.setState({key: ''})
    }
  }


  render() {

    return (
      <div className="form-inline text-center">
        <div className="form-group">
          <input
            style={{borderColor:`${!this.state.taskNameValid?"red":""}`}}
            type="text"
            placeholder="Task name"
            className="form-control"
            onChange={event => this.setState({title: event.target.value})}
          />
          <select
            value={this.state.type}
            className="form-control"
            onChange={event => this.selectChange(event)}
            >
            <option value="list type" hidden>list name</option>
            <option value="shoppingList">shopping list</option>
            <option value="home" >home</option>
            <option value="school" >school</option>
            <option value="work" >work</option>
            {this.props.additionalLists.map(elem => {
                return <option value={elem.name + "|" +elem.key} key={elem.key}>{elem.name}</option>
            })}
          </select>
          <button
            style={{margin:'5px'}}
            className="btn btn-success"
            type="button"
            onClick={() => this.addTask()}
          >
            Add Task
          </button>
          <input
            style={{borderColor:`${!this.state.listNameValid?"red":""}`}}
            type="text"
            placeholder="List name"
            className="form-control"
            onChange={event => this.setState({listTitle: event.target.value})}
          />
          <button
            style={{margin:'5px'}}
            className="btn btn-danger"
            type="button"
            onClick={() => this.addList()}
          >
            Add new List
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user, additionalLists} = state;
  return{
    user,
    additionalLists
  }
}

export default connect(mapStateToProps, null)(AddTask);
