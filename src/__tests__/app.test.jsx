import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Routes from '../routes';
import { initialState } from '../stores/LaunchCollectionReducer';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore([])
const appStore = mockStore({launchCollection: initialState})

describe('app', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={appStore}>
        <Routes />
      </Provider>
    );
  });
});
