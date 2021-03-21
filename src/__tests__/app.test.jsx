import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import Routes from '../routes';
import {testStore,findByTestAtrr} from "../utils"
import LaunchesView from "../views/Launches"
import Layout from '../views/Layout';


configure({ adapter: new Adapter() });

const setUp = (initialState={}) => {
  const store = testStore(initialState);

  const wrapper = shallow(
    <LaunchesView store={store}  />
  ).childAt(0).dive().childAt(0).dive()
  return wrapper;
};


describe('app', () => {

  const initialState = {
    launchCollection: {
      fetching: false,
      errors: false,
      launches:[
      {
        launch_id: 1,
        mission_name: 'sat 9 launch',
        flight_number: 1,
        rocket: { rocket_id: 'falcon9' },
      },
      {
        launch_id: 2,
        mission_name: 'CRS 6',
        flight_number: 2,
        rocket: { rocket_id: 'falcon9' },
      },
      {
        launch_id: 3,
        mission_name: 'Dear Moon',
        flight_number: 3,
        rocket: { rocket_id: 'BFR' },
      },
    ]},
    rocketCollection : {
      rocket: {},
      fetching: false,
      errors: false
    }
  }
  const wrapper = setUp(initialState);

  it('renders without crashing', () => {
    const component = findByTestAtrr(wrapper, 'launchesView')
    expect(component.length).toBe(1);
  });
});

