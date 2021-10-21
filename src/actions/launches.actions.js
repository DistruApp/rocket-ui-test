import { ACTIONS as LAUNCH_ACTIONS } from '../constants/launches.constant';
import { get as launchServiceGet } from '../services/launches.services';

const requestLaunches = () => ({
  type: LAUNCH_ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: LAUNCH_ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return launchServiceGet().then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);
