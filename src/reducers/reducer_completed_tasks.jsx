import {SET_COMPLETED} from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case SET_COMPLETED:
      const {completedTasks} = action;
      return completedTasks;
    default:
      return state;
  }
}
