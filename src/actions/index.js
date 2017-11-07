import {SIGNED_IN, SET_SHOPPING_TASKS, SET_SCHOOL_TASKS, SET_HOME_TASKS, SET_WORK_TASKS, SET_OTHER_TASKS, SET_COMPLETED} from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;

}

export function setShoppingTasks(shoppingTasks){
  const action = {
    type: SET_SHOPPING_TASKS,
    shoppingTasks
  }
  return action;
}


export function setSchoolTasks(schoolTasks){
  const action = {
    type: SET_SCHOOL_TASKS,
    schoolTasks
  }
  return action;
}

export function setHomeTasks(homeTasks){
  const action = {
    type: SET_HOME_TASKS,
    homeTasks
  }
  return action;
}

export function setWorkTasks(workTasks){
  const action = {
    type: SET_WORK_TASKS,
    workTasks
  }
  return action;
}

export function setOtherTasks(otherTasks){
  const action = {
    type: SET_OTHER_TASKS,
    otherTasks
  }
  return action;
}

export function setCompleted(completedTasks){
  const action = {
    type: SET_COMPLETED,
    completedTasks
  }
  return action;
}
