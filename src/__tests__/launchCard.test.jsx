import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LaunchCard from '../components/LaunchCard'

configure({ adapter: new Adapter() });

const launch = {
  details: "Engine failure at 33 seconds and loss of vehicle",
  flight_number: 1,
  launch_date_local: "2006-03-25T10:30:00+12:00",
  launch_success: false,
  links: { mission_patch_small: "https://images2.imgbox.com/40/e3/GypSkayF_o.png" },
  mission_name: "FalconSat",
}

describe('launchCard', () => {
  it('renders without crashing', () => {
    mount(<LaunchCard launch={launch} launchOnClick={() => { }} selected={false} />);
  });
});

