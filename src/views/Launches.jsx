

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import LaunchItem from '../components/LaunchItem';
import LaunchPanel from '../components/LaunchPanel'
import useLaunches from '../hooks/useLaunches'

/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */

const LaunchList = (props) => {
  console.log(props)
  const {
    launches,
    loading,
    error,
    currentLaunch,
    toggleLaunch,
    hasSelectedLaunch
  } = useLaunches()

  if(loading){
    return <div> LOADING </div>;
  }

  if(error){
    return <div> ERROR </div>
  }

  if(launches.length === 0){
    return <div> NO DATA </div>
  }

  return <div style={{
    display: 'flex'
  }}>
    <ul>
      {
        launches.map(launch => <LaunchItem 
          key={launch.launch_id}
          missionName={launch.mission_name}
          flightNumber={launch.flight_number}
          onClick={() => toggleLaunch(launch)}
        />)
      }
    </ul>
   {hasSelectedLaunch && <LaunchPanel 
     rocketId={currentLaunch.rocket_id}
   />}
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

export default ConnectedView(LaunchList, 'launches');
