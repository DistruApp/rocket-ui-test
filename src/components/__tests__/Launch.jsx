import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Launch, { LaunchInternal } from '../Launch'
import { fetchRocket } from '../../actions/Rockets';

jest.mock('../../actions/Rockets')

// Testing LaunchInternal is like unit testing: just test input/output
// So most of our testing will be here
describe('<LaunchInternal />', () => {
  const launch = {
    flight_number: 3,
    name: 'name',
    rocket: 'rocketId'
  }

  describe('when active is false', () => {
    beforeEach(() => {
      render(
        <LaunchInternal
          launch={launch}
          active={false}
          dispatch={() => {}}
          onClick={() => {}}
        />
      )
    })

    it('shows flight number & launch name', () => {
      expect(screen.getByText(launch.name)).toBeDefined()
      expect(screen.getByText(new RegExp(launch.flight_number))).toBeDefined()
    })
  })

  describe('when active is true and rocket is undefined/null', () => {
    beforeEach(() => {
      fetchRocket.mockResolvedValue()

      render(
        <LaunchInternal
          launch={launch}
          active
          dispatch={() => {}}
          onClick={() => {}}
        />
      )
    })

    afterEach(() => {
      fetchRocket.mockClear()
    })

    it('shows flight number & launch name', () => {
      expect(screen.getByText(launch.name)).toBeDefined()
      expect(screen.getByText(new RegExp(launch.flight_number))).toBeDefined()
    })
    it('fetches rocket', () => {
      expect(fetchRocket.mock.calls.length).toBe(1)
    })
  })

  describe('when active is true and rocket is being fetched', () => {
    beforeEach(() => {
      fetchRocket.mockResolvedValue()

      render(
        <LaunchInternal
          launch={launch}
          active
          rocket={{ fetching: true }}
          dispatch={() => {}}
          onClick={() => {}}
        />
      )
    })

    afterEach(() => {
      fetchRocket.mockClear()
    })

    it('shows flight number & launch name', () => {
      expect(screen.getByText(launch.name)).toBeDefined()
      expect(screen.getByText(new RegExp(launch.flight_number))).toBeDefined()
    })
    it('shows loading message', () => {
      expect(screen.getByText(/Loading/)).toBeDefined()
    })
    it('does not fetch rocket', () => {
      expect(fetchRocket.mock.calls.length).toBe(0)
    })
  })

  describe('when active is true and rocket is defined', () => {
    const rocket = {
      id: 'id',
      cost_per_launch: 5,
      description: 'desc'
    }

    beforeEach(() => {
      fetchRocket.mockResolvedValue()

      render(
        <LaunchInternal
          launch={launch}
          active
          rocket={rocket}
          dispatch={() => {}}
          onClick={() => {}}
        />
      )
    })

    afterEach(() => {
      fetchRocket.mockClear()
    })

    it('shows flight number & launch name', () => {
      expect(screen.getByText(launch.name)).toBeDefined()
      expect(screen.getByText(new RegExp(launch.flight_number))).toBeDefined()
    })
    it('does not show loading message', () => {
      expect(screen.queryByText('Loading')).toBeNull()
    })
    it('shows rocket details', () => {
      expect(screen.getByText(new RegExp(rocket.id))).toBeDefined()
      expect(screen.getByText(new RegExp(rocket.cost_per_launch))).toBeDefined()
      expect(screen.getByText(new RegExp(rocket.description))).toBeDefined()
    })
    it('does not fetch rocket', () => {
      expect(fetchRocket.mock.calls.length).toBe(0)
    })
  })
})

// Launch is the actual component that will be used elsewhere so we should test
// that it works but we don't need to repeat the tests we have above
describe('<Launch />', () => {
  const launch = {
    id: 1,
    flight_number: 3,
    name: 'name',
    rocket: 'rocketId'
  }
  const rocket = {
    cost_per_launch: 5,
    description: 'desc'
  }

  describe('when active is true and rocket is defined', () => {
    const rocketCollection = { rockets: { rocketId: rocket } }
    const store = createStore(() => ({ rocketCollection }))

    beforeEach(() => {
      fetchRocket.mockResolvedValue()

      render(
        <Provider store={store}>
          <Launch
            launch={launch}
            active
            dispatch={() => {}}
            onClick={() => {}}
          />
        </Provider>
      )
    })

    afterEach(() => {
      fetchRocket.mockClear()
    })

    it('shows flight number & launch name', () => {
      expect(screen.getByText(launch.name)).toBeDefined()
      expect(screen.getByText(new RegExp(launch.flight_number))).toBeDefined()
    })
    it('does not show loading message', () => {
      expect(screen.queryByText('Loading')).toBeNull()
    })
    it('shows rocket details', () => {
      expect(screen.getByText(new RegExp(launch.rocket))).toBeDefined()
      expect(screen.getByText(new RegExp(rocket.cost_per_launch))).toBeDefined()
      expect(screen.getByText(new RegExp(rocket.description))).toBeDefined()
    })
    it('does not fetch rocket', () => {
      expect(fetchRocket.mock.calls.length).toBe(0)
    })
  })
})
