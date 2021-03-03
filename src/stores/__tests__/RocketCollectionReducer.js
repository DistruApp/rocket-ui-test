import RocketCollectionReducer from '../RocketCollectionReducer'
import { ACTIONS } from '../../actions/Rockets';

describe('default', () => {
  const initialState = RocketCollectionReducer(undefined, {})
  const rocketId = 'rocket-id'

  describe('initial state', () => {
    it('has correct initial state', () => {
      expect(initialState).toEqual({ rockets: {} })
    })
  })

  describe('REQUEST_ROCKET', () => {
    it('creates a rocket with fetching set to true', () => {
      const action = {
        type: ACTIONS.REQUEST_ROCKET,
        payload: {
          rocketId
        }
      }
      const newState = RocketCollectionReducer(initialState, action)
      expect(newState).toEqual({ rockets: { [rocketId]: { fetching: true } } } )
    })
  })

  describe('RECEIVE_ROCKET', () => {
    it('adds the rocket to the state', () => {
      const rocket = { a: 1 }
      const action = {
        type: ACTIONS.RECEIVE_ROCKET,
        payload: {
          rocketId,
          rocket
        }
      }
      const newState = RocketCollectionReducer(initialState, action)
      expect(newState).toEqual({ rockets: { [rocketId]: rocket } } )
    })
  })
})
