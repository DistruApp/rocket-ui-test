import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';

import Launches from '../Launches'

describe('<Launches />', () => {
  const rocketCollection = {
    rockets: { 'rocketId1': {} , 'rocketId2': {} }
  }

  describe('when there are multiple launches', () => {
    const launch1 = {
      id: 1,
      flight_number: 5,
      name: 'launch 1',
      rocket: 'rocketId1'
    }
    const launch2 = {
      id: 2,
      flight_number: 3,
      name: 'launch 2',
      rocket: 'rocketId2'
    }
    const launches = [launch1, launch2]
    const launchCollection = { launches }
    const store = createStore(() => ({ rocketCollection, launchCollection }))

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <Launches launches={launches} />
          </Router>
        </Provider>
      )
    })

    it('shows launches in order', () => {
      const launchItems = screen.getAllByTestId('launch')
      expect(launchItems[0].textContent).toEqual(expect.stringContaining(launch2.name))
      expect(launchItems[1].textContent).toEqual(expect.stringContaining(launch1.name))
    })

    describe('when clicking on an un-expanded launch', () => {
      it('expands the launch', () => {
        fireEvent.click(screen.getByTestId('launch-click-1'))
        expect(screen.getByTestId('launch-1').textContent).toEqual(expect.stringContaining('Rocket'))
      })
    })
    describe('when clicking on an expanded launch', () => {
      it('un-expands the launch', () => {
        fireEvent.click(screen.getByTestId('launch-click-1'))
        fireEvent.click(screen.getByTestId('launch-click-1'))
        expect(screen.getByTestId('launch-1').textContent).not.toEqual(expect.stringContaining('Rocket'))
      })
    })
    describe('when clicking on a different launch', () => {
      it('expands the launch and un-expands the previous launch', () => {
        fireEvent.click(screen.getByTestId('launch-click-1'))
        fireEvent.click(screen.getByTestId('launch-click-2'))
        expect(screen.getByTestId('launch-1').textContent).not.toEqual(expect.stringContaining('Rocket'))
        expect(screen.getByTestId('launch-2').textContent).toEqual(expect.stringContaining('Rocket'))
      })
    })
  })
})
