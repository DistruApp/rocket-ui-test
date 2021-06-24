import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LaunchesView from './views/LaunchesView';

const Routes = () => (
  <Router>
    <>
      <Route exact path="/" component={ LaunchesView }/>
      <Route path="/Launches" component={ LaunchesView }/>
    </>
  </Router>
);

export default Routes;
