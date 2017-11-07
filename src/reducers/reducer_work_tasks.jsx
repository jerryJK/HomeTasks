import {SET_WORK_TASKS} from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case SET_WORK_TASKS:
      const {workTasks} = action;
      return workTasks;
    default:
      return state;
  }
}
