import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import launchCollection from './LaunchCollectionReducer';
import rocketCollection from './RocketReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
