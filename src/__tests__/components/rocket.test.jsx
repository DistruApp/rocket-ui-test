import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import Rocket from '../../components/Rocket';
import { exampleRocket, exampleRocketId, runAllPromises } from '../helpers';

jest.mock('axios');

configure({ adapter: new Adapter() });

describe('rocket', () => {
  beforeEach(() => {
    axios.mockClear();  
  });
  
  it('renders when required props provided', async () => {
    axios.get.mockResolvedValueOnce({
      data: exampleRocket,
      status: 200
    });
    
    const wrapper = mount(<Rocket {...{rocketId: exampleRocketId}} />);
    await runAllPromises();
    wrapper.update();
    expect(wrapper.find('table')).toHaveLength(1);
  });
});
