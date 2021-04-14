import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cloneDeep } from 'lodash';
import Launch from '../../components/Launch';
import { exampleLaunch } from '../helpers';

configure({ adapter: new Adapter() });

const defaultProps = {
  showRocket: false,
  showHideThisRocket: () => null,
  ...exampleLaunch
}

describe('launch', () => {
  it('renders when required props provided', () => {
    shallow(<Launch {...defaultProps} />);
  });

  it('doesn\'t render a rocket when showRocket is false', () => {
    const wrapper = shallow(<Launch {...defaultProps} />);
    expect(wrapper.find("Rocket")).toHaveLength(0);
  });

  it('does render a rocket when showRocket is true', () => {
    const props = cloneDeep(defaultProps)
    props.showRocket = true;
    
    const wrapper = shallow(<Launch {...props} />);
    expect(wrapper.find("Rocket")).toHaveLength(1);
  });

  it('triggers showHideThisRocket when button is clicked', () => {
    const props = cloneDeep(defaultProps)
    props.showHideThisRocket = jest.genMockFunction();

    const wrapper = shallow(<Launch {...props} />);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);

    button.simulate('click');
    expect(props.showHideThisRocket.mock.calls.length).toEqual(1);
  });
});
