import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AllLaunchesView from './views/AllLaunches';
import Layout from "./views/Layout";
import UpcomingLaunchesView from "./views/UpcoingLaunches";
import PastLaunches from"./views/PastLaunches";
import {SingleLaunchModal} from "./components/SingleLaunchModal";
import {LaunchesContext} from "./hooks/launchesProvider";

const Routes = () => {
    return(
        <Router>
            <div>
                <Layout>
                    <Route exact path="/" component={AllLaunchesView}/>
                    <Route path="/past" component={PastLaunches}/>
                    <Route path="/upcoming" component={UpcomingLaunchesView}/>
                </Layout>
            </div>
        </Router>
    );
}

export default Routes;
