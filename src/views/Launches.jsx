import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';
import {
   CollapsibleGroup
 } from '@faceless-ui/collapsibles';

import '../../styles/collapse.css';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection } = this.props;

    let launches = [];

    if (!launchCollection || launchCollection.fetching) {
      return(<div> LOADING </div>);
    }

    if (!launchCollection.launches.length) {
      return(<div> NO DATA </div>);
    }


    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];

      launches.push(
        <Launch {...{
          key: launch.launch_id,
          launch
        }} />

      )
    }

    return (<CollapsibleGroup className="collapsiblegroup">{launches}</CollapsibleGroup>);
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        <div>
        {this.getContent()}
        </div>
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
