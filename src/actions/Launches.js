import LaunchService from '../services/LaunchService';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES'
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.getAll().then(response => dispatch(receiveLaunches(response)));
};
