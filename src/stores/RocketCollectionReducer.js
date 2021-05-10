import { ACTIONS } from '../actions/Rockets';

const initialState = {
  rockets: {},
  rocket_ids: [],
  fetching: false
};

// on insert add id to list
const actionHandlers = {
  [ACTIONS.REQUEST_ROCKET]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_ROCKET]: ({ state, action }) => { 
    const rocket = {}[action.payload.rocket.rocket_id] = action.payload.rocket;
    return {
      ...state,
      fetching: false,
      rocket_ids: [...state.rocket_ids, action.payload.rocket.rocket_id],
      rockets: Object.assign({}, state.rockets, rocket)
    }
  }
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;

