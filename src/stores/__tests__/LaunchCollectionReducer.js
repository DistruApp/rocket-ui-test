import LaunchCollectionReducer from '../LaunchCollectionReducer'
import { ACTIONS } from '../../actions/Launches';

describe('default', () => {
  const initialState = LaunchCollectionReducer(undefined, {})

  describe('initial state', () => {
    it('has correct initial state', () => {
      expect(initialState).toEqual({ launches: [], fetching: false })
    })
  })

  describe('REQUEST_LAUNCHES', () => {
    it('sets fetching to true', () => {
      const action = { type: ACTIONS.REQUEST_LAUNCHES }
      const newState = LaunchCollectionReducer(initialState, action)
      expect(newState).toEqual({ launches: [], fetching: true } )
    })
  })

  describe('RECEIVE_LAUNCHES', () => {
    it('sets the launches to the state', () => {
      const launch = { a: 1 }
      const action = {
        type: ACTIONS.RECEIVE_LAUNCHES,
        payload: {
          launches: [launch]
        }
      }
      const newState = LaunchCollectionReducer(initialState, action)
      expect(newState).toEqual({ launches: [launch], fetching: false })
    })
  })
})
