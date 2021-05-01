import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import Launch from '../components/Launch';

const LaunchesView = () => {
  const [launchCollection, setLaunches] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://api.spacexdata.com/v3/launches')
      const jsonData = await data.json()
      setLaunches(jsonData)
    }

    getData()
  }, [])

  let launches = [];

  for (let i = 0; i < launchCollection.length; i++) {
    const launch = launchCollection[i];

    launches.push(
      <Launch {...{
        key: launch.launch_id,
        launch
      }} />

    )
  }

  return (
    <div>
      <h2> SpaceX launches </h2>
      <ul>{launches.length ? launches : `Loading...`}</ul>
    </div>
  );
}

export default ConnectedView(LaunchesView, 'launches');
