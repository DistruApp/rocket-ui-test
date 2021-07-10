

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import LaunchItem from '../components/LaunchItem';
import LaunchPanel from '../components/LaunchPanel'

/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */

const LaunchList = (props) => {
  console.log(props)
  return <div style={{
    display: 'flex'
  }}>
    <LaunchesView {...props} />
    <LaunchPanel />
  </div>
}


const LaunchItemAPIProps = {
  fetching: PropTypes.bool.isRequired,
  launches: PropTypes.arrayOf(PropTypes.objectOf({
    launch_id: PropTypes.string
  }))
}

LaunchList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  launchCollection: PropTypes.objectOf(LaunchItemAPIProps)
}

class LaunchesView extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    launchCollection: PropTypes.objectOf(LaunchItemAPIProps)
  }

  componentDidMount() {
    const { dispatch, launchCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
  }

  getList() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = launchCollection.launches.map(launch => <LaunchItem 
        key={launch.launch_id}
        missionName={launch.mission_name}
        flightNumber={launch.flight_number}        
      />)

    return <ul>{launches}</ul>;
  }
 
  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getList()}
      </div>
    );
  }
}




export default ConnectedView(LaunchList, 'launches');
