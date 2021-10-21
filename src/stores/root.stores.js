import { createStore, combineReducers } from 'redux';
import { actionHandlers as launchCollection } from './launch.stores';

const rootReducer = combineReducers({
  launchCollection
});

const store = createStore(rootReducer);

export default store;
