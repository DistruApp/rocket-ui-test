import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LaunchesView from './views/LaunchesView';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={LaunchesView}/>
      <Route path="/Launches" component={LaunchesView}/>
    </div>
  </Router>
);

export default Routes;
