import {combineReducers} from 'redux';
import user from './reducer_user';
import tasks from './reducer_tasks';
import completedTasks from './reducer_completed_tasks';


export default combineReducers({
  user,
  tasks,
  completedTasks
})
