import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Layout } from '../components/Layout';

configure({ adapter: new Adapter() });

describe('Layout component test', () => {
  it('renders Layout component without crashing', () => {
    const component = mount(
      <Layout>
        <div>test</div>
      </Layout>
    );
    expect(component.getElements()).toMatchSnapshot();
  });
});
