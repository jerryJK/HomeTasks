import {SET_SCHOOL_TASKS} from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case SET_SCHOOL_TASKS:
      const {schoolTasks} = action;
      return schoolTasks;
    default:
      return state;
  }
}
