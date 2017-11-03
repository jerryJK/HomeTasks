import {SIGNED_IN} from '../constants';

let user = {
  email: null
}

export default (state = user, action) => {
  switch(action.type){
    case SIGNED_IN:
      return {...state, email: action.email}
    default:
      return state;
  }
}
