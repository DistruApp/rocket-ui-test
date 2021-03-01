import React, { useEffect } from 'react';
import MasterLayoutHoc from '../components/MasterLayoutHoc';
import { shouldFetchLaunches, fetchLaunches } from "../actions/Launches";
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchCollection }) => {
  useEffect(() => {
    if (shouldFetchLaunches(launchCollection)) fetchLaunches(dispatch);
  }, [])

  if (!launchCollection || launchCollection.fetching) {
    return <div> LOADING </div>;
  }

  const { launches } = launchCollection;

  if (!launches.length) {
    return <div> NO DATA </div>;
  }

  return (
    <div>
      <h2> SpaceX launches </h2>
      <ul>
        {launches.map((launch) => {
          return (
            <Launch
              key={launch.id}
              launch={launch}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default MasterLayoutHoc(LaunchesView, 'launches');
