import { getRocket } from '../Rockets'

describe('{ getRocket }', () => {
  const rocketId = '3'

  it('returns null if rocket does not exist', () => {
    const rocket = getRocket({ rockets: {} }, rocketId)
    expect(rocket).toBeNull()
  })
  it('returns rocket with id set if rocket does exist', () => {
    const rocket = getRocket({ rockets: { [rocketId]: { a: 1 } } }, rocketId)
    expect(rocket).toEqual({ a: 1, id: rocketId })
  })
})
