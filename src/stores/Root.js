import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import spacex from "./SpaceXDuck";

const rootReducer = combineReducers({
  spacex
});

export function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  // Can conditionally add more middlewares as needed
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);
  return store
}

const store = configureStore();

export default store;
