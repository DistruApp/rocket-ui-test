import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  status: 'idle',
  error: null
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    status: 'loading'
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    status: 'succeeded',
    launches: action.payload.launches
  }),
  [ACTIONS.FAIL_LAUNCHES]: ({ state, action }) => ({
    ...state,
    status: 'failed',
    error: action.payload.error
  }),
  [ACTIONS.COLLAPSE_LAUNCH]: ({ state, action }) => ({
    ...state,
    launches: state.launches.map(launch => {
      if (launch.id == action.payload.id) {
        return {...launch, expanded: false}
      } else {
        return launch
      }
    })
  }),
  [ACTIONS.EXPAND_LAUNCH]: ({ state, action }) => ({
    ...state,
    launches: state.launches.map(launch => {
      if (launch.id == action.payload.id) {
        return {...launch, expanded: true}
      } else {
        return {...launch, expanded: false}
      }
    })
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
