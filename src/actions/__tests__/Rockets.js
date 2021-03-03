import { fetchRocket } from '../Rockets'
import { ACTIONS } from '../../actions/Rockets'
import RocketService from '../../services/RocketService';

jest.mock('../../services/RocketService')

describe('{ fetchRocket }', () => {
  const dispatch = jest.fn()
  const rocket = { a: 1 }
  const rocketId = 'rocket-id'

  beforeEach(() => {
    RocketService.get.mockResolvedValue({ data: rocket })
  })

  afterEach(() => {
    RocketService.get.mockClear()
  })

  it('dispatches 2 actions', () => {
    return fetchRocket(dispatch, rocketId)
      .then(() => {
        expect.assertions(3)
        expect(dispatch.mock.calls.length).toBe(2)
        expect(dispatch.mock.calls[0][0]).toEqual({
          type: ACTIONS.REQUEST_ROCKET,
          payload: {
            rocketId
          }
        })
        expect(dispatch.mock.calls[1][0]).toEqual({
          type: ACTIONS.RECEIVE_ROCKET,
          payload: {
            rocket,
            rocketId
          }
        })
      })
  })
})
