import LaunchService from '../services/LaunchService';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  RECEIVE_LAUNCHES_FAILURE: 'RECEIVE_LAUNCHES_FAILURE',
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES,
});

const receiveLaunches = (response) => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data,
  },
});

const receiveLaunchesFailure = () => ({
  type: ACTIONS.RECEIVE_LAUNCHES_FAILURE,
});

export function fetchLaunches() {
  return async (dispatch) => {
    dispatch(requestLaunches());

    LaunchService.get()
      .then((response) => {
        dispatch(receiveLaunches(response));
      })
      .catch(() => {
        dispatch(receiveLaunchesFailure());
      });
  };
}
