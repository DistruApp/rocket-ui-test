import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { Launch } from '../Launch'
import { fetchRocket } from '../../actions/Rockets';

jest.mock('../../actions/Rockets')

describe('<Launch />', () => {
  const launch = {
    flight_number: 3,
    name: 'name',
    rocket: 'rocketId'
  }

  describe('when active is false', () => {
    beforeEach(() => {
      render(
        <Launch
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
        <Launch
          launch={launch}
          active={true}
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
        <Launch
          launch={launch}
          active={true}
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
        <Launch
          launch={launch}
          active={true}
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
