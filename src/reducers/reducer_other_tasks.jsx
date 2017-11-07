import {SET_OTHER_TASKS} from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case SET_OTHER_TASKS:
      const {otherTasks} = action;
      return otherTasks;
    default:
      return state;
  }
}
