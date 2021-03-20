import React, { useEffect } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunches} from "../actions/Launches";
import Launch from '../components/Launch';

const LaunchesView = ({launchCollection, dispatch}) => {
  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  const {launches, fetching, errors} = launchCollection

  const renderLaunches = () => {
    if (errors) return <div> STARLINK DOWN </div>;
    if (!launchCollection || fetching) return <div> LOADING </div>;
    if (launchCollection && !launches.length) return <div> NO DATA </div>;
    return launches.map((launch) => <Launch key={launch.launch_id} launch={launch}/>)
  }
  return(
    <div>
        <h2> SpaceX launches </h2>
        <ul>
        {renderLaunches()}
        </ul>
      </div>
  )
}


export default ConnectedView(LaunchesView, 'launches');
