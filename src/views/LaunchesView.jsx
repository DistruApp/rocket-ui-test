import React, { Component } from 'react';
import MasterLayoutHoc from '../components/MasterLayoutHoc';
import { shouldFetchLaunches, fetchLaunches } from "../actions/Launches";
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    if (shouldFetchLaunches(launchesCollection)) fetchLaunches(dispatch);
  }

  getContent() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    let launches = [];

    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];

      launches.push(
        <Launch {...{
          key: launch.id,
          launch
        }} />

      )
    }

    return <ul>{launches}</ul>;
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default MasterLayoutHoc(LaunchesView, 'launches');
