import {SET_HOME_TASKS} from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case SET_HOME_TASKS:
      const {homeTasks} = action;
      return homeTasks;
    default:
      return state;
  }
}
