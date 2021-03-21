import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunches} from "../actions/Launches";
import {fetchRocket} from "../actions/Rockets";

import Launch from '../components/Launch';

const LaunchesView = ({launchCollection, rocketCollection, dispatch}) => {
  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  const [activeLaunch, setActiveLaunch] = useState(null);


  const handleClick = (event, launchId, rocketId) => {
    event.preventDefault();
    if(launchId === activeLaunch) {
      setActiveLaunch(null)
    } else {
      setActiveLaunch(launchId)
      dispatch(fetchRocket(rocketId));
    }
  }

  const {launches, fetching, errors} = launchCollection

  const renderLaunches = () => {
    if (errors) return <div> STARLINK DOWN </div>;
    if (!launchCollection || fetching) return <div> LOADING </div>;
    if (launchCollection && !launches.length) return <div> NO DATA </div>;
    return launches.map((launch) =>
      <Launch
        key={launch.launch_id}
        launch={launch}
        handleClick={handleClick}
        activeLaunch={activeLaunch}
        rocketCollection={rocketCollection}
      />)
  }
  return(
    <div data-test="launchesView">
        <h2> SpaceX launchess </h2>
        <ul>
        {renderLaunches()}
        </ul>
      </div>
  )
}


export default ConnectedView(LaunchesView, 'launches');
