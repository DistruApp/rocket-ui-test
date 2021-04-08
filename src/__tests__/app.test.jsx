import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });
const mockStore = configureStore([])

describe('app', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={mockStore()}>
        <Routes />
      </Provider>
    );
  });
});
