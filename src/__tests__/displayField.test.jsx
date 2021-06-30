import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DisplayField from '../components/DisplayField';

configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    mount(<DisplayField label="mylabel" value="myValue" />);
  });
});


