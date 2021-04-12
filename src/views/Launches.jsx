import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
  }

  getContent() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];
    for (const launchInfo of launchCollection.launches) {
      launches.push(
        <li key={launchInfo._id}>
          {launch(launchInfo)}
        </li>
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

LaunchesView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  // TODO: It would be nice to be more specific and not disable this
  // I could be more specific. It's the LaunchCollectionReducer state
  launchCollection: PropTypes.object.isRequired
}

export default ConnectedView(LaunchesView, 'launches');
