import {combineReducers} from 'redux';
import user from './reducer_user';
import shoppingTasks from './reducer_shopping_tasks';
import schoolTasks from './reducer_school_tasks';
import homeTasks from './reducer_home_tasks';
import workTasks from './reducer_work_tasks';
import otherTasks from './reducer_other_tasks';
import completedTasks from './reducer_completed_tasks';


export default combineReducers({
  user,
  shoppingTasks,
  schoolTasks,
  homeTasks,
  workTasks,
  otherTasks,
  completedTasks
})
