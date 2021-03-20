import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection } = this.props;
    if (!launchCollection || launchCollection.fetching) return <div> LOADING </div>;
    if (launchCollection && !launchCollection.launches.length) return <div> NO DATA </div>;
    return launchCollection.launches.map((launch) => <Launch key={launch.launch_id} launch={launch}/>)
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        <ul>
        {this.getContent()}
        </ul>
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
