import { ACTIONS as ROCKET_ACTIONS } from '../constants/rocket.constant';
import { get as rocketServiceGet } from '../services/rocket.services';

const requestRocket = () => ({
  type: ROCKET_ACTIONS.REQUEST_ROCKET
});

const receiveRocket = response => ({
  type: ROCKET_ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data
  }
});

export const fetchRocket = (dispatch, id) => {
  dispatch(requestRocket());
  return rocketServiceGet(id).then(response => dispatch(receiveRocket(response)));
};
