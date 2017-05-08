
import { SIGNED_IN, SET_GOALS, SET_COMPLETE_GOALS } from '../constant';

export function logUser (email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}
export function setGoals (goals) {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}
export function setcompleteGoals (completeGoals) {
  const action = {
    type: SET_COMPLETE_GOALS,
    completeGoals
  }
  console.log('action',action);
  return action;
}
