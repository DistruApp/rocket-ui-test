import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Launches from './views/Launches';
import Layout from "./views/Layout";
import Navigation from './components/Navigation';
const menu = Navigation();

const Routes = () => {

const layoutProps = {
    menu
};

return (
  <Router>
      <Layout {...layoutProps}>
          <Route exact path="/" component={Launches}/>
          <Route path="/launches" component={Launches}/>
      </Layout>
  </Router>
)};

export default Routes;
