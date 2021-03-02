import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';

import LaunchesView from '../LaunchesView'

describe('<LaunchesView />', () => {
  const rocketCollection = { rockets: {} }

  describe('when fetching is false and launches is empty', () => {
    const launchCollection = {
      fetching: false,
      launches: []
    }
    const store = createStore((state) => {
      return { rocketCollection, launchCollection }
    })

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <LaunchesView />
          </Router>
        </Provider>
      )
    })

    it('shows no data message', () => {
      expect(screen.getByText(/NO DATA/)).toBeDefined()
    })
  })

  describe('when fetching is true and launches is empty', () => {
    const launchCollection = {
      fetching: true,
      launches: []
    }
    const store = createStore((state) => {
      return { rocketCollection, launchCollection }
    })

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <LaunchesView />
          </Router>
        </Provider>
      )
    })

    it('shows loading message', () => {
      expect(screen.getByText(/LOADING/)).toBeDefined()
    })
  })

  describe('when fetching is false and launches is not empty', () => {
    const launch1 = {
      id: 1,
      flight_number: 3,
      name: 'launch 1',
      rocket: 'rocket ID'
    }
    const launch2 = {
      id: 2,
      flight_number: 5,
      name: 'launch 2',
      rocket: 'rocket ID'
    }
    const launchCollection = {
      fetching: false,
      launches: [launch1, launch2]
    }
    const store = createStore((state) => {
      return { rocketCollection, launchCollection }
    })

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <LaunchesView />
          </Router>
        </Provider>
      )
    })

    it('shows header', () => {
      expect(screen.getByText(/SpaceX launches/)).toBeDefined()
    })
    it('show launches', () => {
      expect(screen.getByText(new RegExp(launch1.name))).toBeDefined()
      expect(screen.getByText(new RegExp(launch2.name))).toBeDefined()
    })
  })
})
