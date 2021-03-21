import { ACTIONS } from '../actions/Launches';
import launchCollection from '../stores/LaunchCollectionReducer';

describe('Launch reducer', () => {
  const initialState = {
    launches: [],
    fetching: false,
    errors: false,
  };
  it('should retrun the default state', () => {
    const newState = launchCollection(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should retrun a new state with updated fetching state REQUEST_LAUNCHES action', () => {
    const newState = launchCollection(undefined, {
      type: ACTIONS.REQUEST_LAUNCHES,
    });

    const expectedState = {
      ...initialState,
      fetching: true,
    };
    expect(newState).toEqual(expectedState);
  });

  it('should retrun a new state with updated launches when receiveing a RECEIVE_LAUNCHES action', () => {
    const launches = [
      {
        mission_name: 'sat 9 launch',
        flight_number: 1,
        rocket: { rocket_id: 'falcon9' },
      },
      {
        mission_name: 'CRS 6',
        flight_number: 2,
        rocket: { rocket_id: 'falcon9' },
      },
      {
        mission_name: 'Dear Moon',
        flight_number: 3,
        rocket: { rocket_id: 'BFR' },
      },
    ];

    const newState = launchCollection(undefined, {
      type: ACTIONS.RECEIVE_LAUNCHES,
      payload: { launches },
    });

    const expectedState = {
      ...initialState,
      launches: [...initialState.launches, ...launches],
    };
    expect(newState).toEqual(expectedState);
  });

  it('should retrun a new state with updated error state RECEIVE_LAUNCHES_FAILURE action', () => {
    const newState = launchCollection(undefined, {
      type: ACTIONS.RECEIVE_LAUNCHES_FAILURE,
    });

    const expectedState = {
      ...initialState,
      errors: true,
    };
    expect(newState).toEqual(expectedState);
  });
});
