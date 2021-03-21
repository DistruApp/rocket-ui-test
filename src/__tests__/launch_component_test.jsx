import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAtrr } from "../utils";
import Launch from '../components/Launch';

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<Launch {...props} />)
    return component
}

describe('Launch Component with valid props', () => {
    let component;
    const mockFunc = jest.fn();
    const mockProps = {
        launch: {
            mission_name: 'CRS 9',
            flight_number: 1,
            rocket: {
                rocket_id: 'falcon9'
            }
        },
        rocketCollection: {
            rocket: {
                rocket: 'falcon9'
            },
            error: false,
            fetching: true,
        },
        activeLaunch: null,
        handleClick: mockFunc
        }
    beforeEach(() => {

        component = setUp(mockProps)
    });

    it('should render a launch list item', () => {
        const launch = findByTestAtrr(component, 'launchItem');
        expect(launch.length).toBe(1);
    });
    it('should render the mission name', () => {
        const missionName = findByTestAtrr(component, 'missionName');
        expect(missionName.text()).toContain(mockProps.launch.mission_name);
    });
    it('should render the flight number', () => {
        const flightNumber = findByTestAtrr(component, 'flightNumber');
        expect(flightNumber.text()).toContain(mockProps.launch.flight_number);
    });
    it('should handle a click event', () => {
        const launchLink = findByTestAtrr(component, 'launchLink');
        launchLink.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });

})