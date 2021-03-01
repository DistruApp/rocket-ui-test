import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET'
};

export const requestRocket = (rocketId) => ({
  type: ACTIONS.REQUEST_ROCKET,
  payload: {
    rocketId
  }
});

const receiveRocket = (rocketId, response) => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data,
    rocketId
  }
});

export const fetchRocket = (dispatch, id) => {
  dispatch(requestRocket(id));
  return RocketService.get(id).then(response => {
    dispatch(receiveRocket(id, response))
  });
};
