import { ACTIONS as LAUNCH_ACTIONS } from '../constants/launches.constant';

const initialState = {
  launches: [],
  fetching: false
};

export const actionHandlers = (state = initialState, action) => {
  switch (action.type) {
    case LAUNCH_ACTIONS.REQUEST_LAUNCHES:
      return {
        ...state,
        fetching: true
      };
    case LAUNCH_ACTIONS.RECEIVE_LAUNCHES:
      return {
        ...state,
        fetching: false,
        launches: [...state.launches, ...action.payload.launches]
      };
    default:
      return state;
  }
};
