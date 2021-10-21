import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as redux from "react-redux";
import { LaunchesView } from '../views/LaunchesView';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const exampleLaunchDef = {
  rocket:{
    rocket_id: '1'
  },
  _id: '1',
  mission_name: 'Test Mission Name',
  flight_number: 'Test Flight Number'
}

configure({ adapter: new Adapter() });

describe('LaunchView component test', () => {
  it('renders LaunchView component without crashing in Error', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ fetching: false, launches: 1 })
    const component = mount(<LaunchesView/>);
    expect(component.getElements()).toMatchSnapshot();
  });
  it('renders LaunchView component without crashing', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ fetching: false, launches: [exampleLaunchDef] })
    const component = mount(<LaunchesView/>);
    expect(component.getElements()).toMatchSnapshot();
  });
});