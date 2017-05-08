import  { SET_COMPLETE_GOALS } from '../constant';

export default (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETE_GOALS:
      const { completeGoals } = action;
      console.log(action);
      return completeGoals;
    default:
      return state;
  }
}
