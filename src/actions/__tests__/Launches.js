import { fetchLaunches } from '../Launches'
import { ACTIONS } from '../../actions/Launches'
import LaunchService from '../../services/LaunchService';

jest.mock('../../services/LaunchService')

describe('{ fetchLaunches }', () => {
  const dispatch = jest.fn()
  const launches = [{ a: 1 }]

  beforeEach(() => {
    LaunchService.getAll.mockResolvedValue({ data: launches })
  })

  afterEach(() => {
    LaunchService.getAll.mockClear()
  })

  it('dispatches 2 actions', () => {
    return fetchLaunches(dispatch)
      .then(() => {
        expect.assertions(3)
        expect(dispatch.mock.calls.length).toBe(2)
        expect(dispatch.mock.calls[0][0]).toEqual({
          type: ACTIONS.REQUEST_LAUNCHES
        })
        expect(dispatch.mock.calls[1][0]).toEqual({
          type: ACTIONS.RECEIVE_LAUNCHES,
          payload: {
            launches
          }
        })
      })
  })
})
