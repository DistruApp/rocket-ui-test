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
    const rocket = { ...action.payload.rocket, fetched: true }

    return {
      ...state,
      rockets: { ...state.rockets, [id]: rocket }
    }
  }
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
