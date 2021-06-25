import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LaunchesContainer from './components/Launches/LaunchesContainer';

const Routes = () => (
    <Router>
        <Route exact path="/" component={ LaunchesContainer }/>
        <Route path="/Launches" component={ LaunchesContainer }/>
    </Router>
);

export default Routes;
