import { ACTIONS as ROCKET_ACTIONS } from '../constants/rocket.constant';

const initialState = {
  rocket: [],
  fetching: false
};

export const actionHandlers = (state = initialState, action) => {
  switch (action.type) {
    case ROCKET_ACTIONS.REQUEST_ROCKET:
      return {
        ...state,
        fetching: true
      };
    case ROCKET_ACTIONS.RECEIVE_ROCKET:
      return {
        ...state,
        fetching: false,
        rocket: [...state.rocket, ...action.payload.rocket]
      };
    default:
      return state;
  }
};
