import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
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
      const launchInfo = launchCollection.launches[i];

      launches.push(
        launch({...{
          key: launchInfo.launch_id,
          launchInfo
        }})
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
