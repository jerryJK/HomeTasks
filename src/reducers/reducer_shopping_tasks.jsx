import {SET_SHOPPING_TASKS} from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case SET_SHOPPING_TASKS:
      const {shoppingTasks} = action;
      return shoppingTasks;
    default:
      return state;
  }
}
