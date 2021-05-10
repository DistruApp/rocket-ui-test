import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET'
};

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const receiveRocket = response => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data
  }
});

export const fetchRocket = (dispatch, rocketId) => {
   // TODO how to get rocket id in here
  dispatch(requestRocket());
  return RocketService.get(rocketId).then(response => dispatch(receiveRocket(response)));
};

// is rocket with rocketid already fetched and in cache?
// how to do entry is in collection in JS?
const shouldFetchRocket = (rocketCollection, rocketId) => {
  !rocketCollection || !rocketCollection.fetching || !rocketCollection.rocketIds.includes(rocketId);
}

export const fetchRocketIfNeeded = ({ dispatch, rocketCollection, rocketId }) =>
  shouldFetchRocket(rocketCollection, rocketId) && fetchRockets(dispatch, rocketId);

  // add a component for displaying individual rocket info 
  // on component did mount get rocketId from props
  // pass that into fetchRocketIfNeeded

