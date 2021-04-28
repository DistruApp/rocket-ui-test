import LaunchService from '../services/LaunchService';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  FAIL_LAUNCHES: 'FAIL_LAUNCHES',
  COLLAPSE_LAUNCH: 'COLLAPSE_LAUNCH',
  EXPAND_LAUNCH: 'EXPAND_LAUNCH'
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data.docs.map(launch => ({...launch, expanded: false}))
  }
});

const failLaunches = () => ({
  type: ACTIONS.FAIL_LAUNCHES,
  payload: {
    error: "Unable to fetch launches."
  }
});

export const fetchLaunches = () => {
  return function(dispatch) {
    dispatch(requestLaunches())
    return LaunchService.get().then(
      response => dispatch(receiveLaunches(response)),
      _error => dispatch(failLaunches())
    );
  }
};

export const collapseLaunch = id => ({
  type: ACTIONS.COLLAPSE_LAUNCH,
  payload: {id}
});

export const expandLaunch = id => ({
  type: ACTIONS.EXPAND_LAUNCH,
  payload: {id}
});
