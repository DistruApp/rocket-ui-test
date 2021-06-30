import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Routes from '../routes';

configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    mount(<Routes />);
  });
});


