import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as redux from 'react-redux';
import { Launch } from '../components/Launch';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const exampleLaunchDef = {
  rocket: {
    rocket_id: '1'
  },
  _id: '1',
  mission_name: 'Test Mission Name',
  flight_number: 'Test Flight Number'
};

configure({ adapter: new Adapter() });

describe('Launch component test', () => {
  it('renders Launch component without crashing', () => {
    const component = mount(<Launch launch={exampleLaunchDef} onClick={() => {}} isOpen={false} />);
    expect(component.getElements()).toMatchSnapshot();
  });
  it('tests Launch component behaviour', () => {
    const mockOnClick = jest.fn();
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const component = mount(
      <Launch launch={exampleLaunchDef} onClick={mockOnClick} isOpen={false} />
    );
    expect(component.exists('table')).toBeFalsy();
    component.find('button').simulate('click');
    expect(mockOnClick.mock.calls.length).toEqual(1);
    expect(component.find('table')).toBeTruthy();
    component.find('button[type="button"]').simulate('click');
    expect(mockOnClick.mock.calls.length).toEqual(2);
    expect(component.exists('table')).toBeFalsy();
    useDispatchSpy.mockClear();
  });
});
