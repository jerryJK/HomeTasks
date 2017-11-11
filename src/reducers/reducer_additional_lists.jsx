import {SET_ADDITIONAL_LISTS} from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case SET_ADDITIONAL_LISTS:
      //const {additionalLists} = action;
      const additionalLists = action.additionalLists;
      return additionalLists;
    default:
      return state;
  }
}
