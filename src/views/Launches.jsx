import React, { useState, useEffect } from 'react';
import Launch from '../components/Launch';
import {useLaunches} from "../hooks/launchesProvider";

const LaunchesView = () => {
  const {launches, isfetchingLaunches} = useLaunches();

  if (isfetchingLaunches) {
    return <div> LOADING </div>;
  }

  if (!launches.length) {
    return <div> NO DATA </div>;
  }

  return (
      <div>
        <h2> SpaceX launches </h2>
        <ul>{launches.map( launch => <Launch {...{
          key: launch.mission_name,
          launch
        }} />)}</ul>
      </div>
  )
}

export default LaunchesView;
