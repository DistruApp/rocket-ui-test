import { createStore, combineReducers } from 'redux';
import { actionHandlers as launchCollection } from './launches.stores';

const rootReducer = combineReducers({
  launchCollection
});

const store = createStore(rootReducer);

export default store;
