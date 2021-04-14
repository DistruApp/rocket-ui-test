import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import LaunchesView from '../../views/Launches';
import { exampleLaunches, runAllPromises } from '../helpers';

jest.mock('axios');

configure({ adapter: new Adapter() });
const mockStore = configureMockStore([])
const appStore = mockStore({})

describe('LaunchesView', () => {
  beforeEach(() => {
    axios.mockClear();  
  });

  it('renders without crashing', () => {
    // we have to stup it just so the mocked axios doesn't get confused
    axios.get.mockResolvedValueOnce({
      data: exampleLaunches,
      status: 200
    });

    const wrapper = mount(
      <Provider store={appStore}>
        <Router>
          <LaunchesView />
        </Router>
      </Provider>
    );
    expect(wrapper.find('LaunchesView')).toHaveLength(1);
  });

  it('renders individual launches', async () => {
    axios.get.mockResolvedValueOnce({
      data: exampleLaunches,
      status: 200
    });

    const wrapper = mount(
      <Provider store={appStore}>
        <Router>
          <LaunchesView />
        </Router>
      </Provider>
    );
    await runAllPromises();
    wrapper.update();
    expect(wrapper.find('Launch')).toHaveLength(exampleLaunches.length);
  });
});
