import { ACTIONS } from '../actions/Rockets';

const initialState = {
  rocket: {},
  fetching: false,
  errors: false,
};

const actionHandlers = {
  [ACTIONS.REQUEST_ROCKET]: ({ state }) => ({
    ...state,
    fetching: true,
  }),
  [ACTIONS.RECEIVE_ROCKET]: ({ state, action }) => ({
    ...state,
    fetching: false,
    rocket: { ...state.rocket, ...action.payload.rocket },
  }),
  [ACTIONS.RECEIVE_ROCKET_FAILURE]: ({ state }) => ({
    ...state,
    fetching: false,
    errors: true,
  }),
};

export default (state = initialState, action) =>
  actionHandlers[action.type]
    ? actionHandlers[action.type]({ state, action })
    : state;
