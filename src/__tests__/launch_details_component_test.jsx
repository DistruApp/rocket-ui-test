import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAtrr } from "../utils";
import LaunchDetails from '../components/LaunchDetails';

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const defaultProps = {
        launch: {
            mission_name: 'CRS 9',
            flight_number: 1,
            details: "rocket flight high",
            rocket: {
                rocket_id: 'falcon9',
                rocket_name: "Falcon 9"
            }
        },
        rocketCollection: {
            rocket: {
                rocket: 'falcon9',
                cost_per_launch: 50
            },
            error: false,
            fetching: false,
        },
        activeLaunch: 1
    }
    const mockProps= {...defaultProps, ...props }
    const component = shallow(<LaunchDetails {...mockProps} />)
    return {mockProps, component}
}

describe('Launch Details Component rendered with valid props', () => {
        const {mockProps, component} = setUp()
        it('should render the launch details for the active launch', () => {
            const launchDetails = findByTestAtrr(component, 'launchDetails');
            expect(launchDetails.length).toBe(1);
        });

        it('should render the rocket id', () => {
            const rocketId = findByTestAtrr(component, 'rocketId');
            expect(rocketId.text()).toContain(mockProps.launch.rocket.rocket_id);
        });
        it('should render the cost per launch', () => {
            const costPerLaunch = findByTestAtrr(component, 'costPerLaunch');
            expect(costPerLaunch.text()).toContain(mockProps.rocketCollection.rocket.cost_per_launch);
        });
        it('should render the launch details', () => {
            const launchDescription = findByTestAtrr(component, 'launchDescription');
            expect(launchDescription.text()).toContain(mockProps.launch.details);
        });
});

describe('Launch Details when not the active flight ', () => {

    it('should not render the launch details if the active launch is different than the compnent flight number', () => {
        const {component} = setUp({activeLaunch: 2})
        const launchDetails = findByTestAtrr(component, 'launchDetails');
        expect(launchDetails.length).toBe(0);
    });

});

describe('Rocket details while fetching ', () => {

    it('should render a loading spinner while the data is being fetched', () => {
        const {component} = setUp({rocketCollection: {fetching: true}})
        const rocketLoading = findByTestAtrr(component, 'rocketLoading');
        expect(rocketLoading.length).toBe(1);
    });

    it('should render an error message if the api returns an error', () => {
        const {component} = setUp({rocketCollection: {errors: true}})
        const fetchError = findByTestAtrr(component, 'fetchError');
        expect(fetchError.length).toBe(1);
    });

});
