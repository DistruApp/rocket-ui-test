import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  fetching: false,
  errors: false,
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true,
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches],
  }),
  [ACTIONS.RECEIVE_LAUNCHES_FAILURE]: ({ state }) => ({
    ...state,
    fetching: false,
    errors: true,
  }),
};

export default (state = initialState, action) =>
  actionHandlers[action.type]
    ? actionHandlers[action.type]({ state, action })
    : state;
