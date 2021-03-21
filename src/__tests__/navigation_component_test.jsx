import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Navigation from '../components/Navigation';
import { findByTestAtrr } from "../utils";

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<Navigation {...props}/>)
    return component
}

describe('Navigation Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a link to launches', () => {
        const launchesLink = findByTestAtrr(component, 'launchesLink')
        expect(launchesLink.length).toBe(1)

    })
})

