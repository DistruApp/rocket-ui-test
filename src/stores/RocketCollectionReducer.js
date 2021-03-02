import { ACTIONS } from '../actions/Rockets';

const initialState = {
  rockets: {}
};

const actionHandlers = {
  [ACTIONS.REQUEST_ROCKET]: ({ state, action }) => {
    const id = action.payload.rocketId;
    const rocket = state.rockets[id] || {};
    const newRocket = { ...rocket, fetching: true };

    return {
      ...state,
      rockets: { ...state.rockets, [id]: newRocket }
    }
  },
  [ACTIONS.RECEIVE_ROCKET]: ({ state, action }) => {
    const id = action.payload.rocketId;

    return {
      ...state,
      rockets: { ...state.rockets, [id]: action.payload.rocket }
    }
  }
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
