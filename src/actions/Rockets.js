import LaunchService from '../services/LaunchService';

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET',
  RECEIVE_ROCKET_FAILURE: 'RECEIVE_ROCKET_FAILURE',
};

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET,
});

const receiveRocket = (response) => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data,
  },
});

const receiveRocketFailure = () => ({
  type: ACTIONS.RECEIVE_ROCKET_FAILURE,
});

export function fetchRocket(id) {
  return async (dispatch) => {
    dispatch(requestRocket());

    LaunchService.getRocket(id)
      .then((response) => {
        dispatch(receiveRocket(response));
      })
      .catch(() => {
        dispatch(receiveRocketFailure());
      });
  };
}
