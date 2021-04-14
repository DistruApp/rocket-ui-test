import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import Launch from '../components/Launch';
import { fetchLaunches } from '../http';

const hookForLaunchesData = (setLoading) => {
  // where we store the data after it's gotten, before returning it
  const [ launchesInfo, setLaunchesInfo ] = useState(null);

  const fetchLaunchesData = async () => fetchLaunches();

  useEffect(() => {
    setLoading(true);
    fetchLaunchesData().then(data => {
      setLaunchesInfo(data);
      setLoading(false);
    });
  }, []);

  return launchesInfo;
}

const LaunchesView = () => {
  const [loading, setLoading] = useState(false);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const launchCollection = hookForLaunchesData(setLoading);

  const handleSelectLaunch = (launchId) => {
    const setTo = (launchId === selectedLaunch ? null : launchId);
    setSelectedLaunch(setTo);
  }
  
  const generateLaunchesList = () => {
    if (!launchCollection || loading) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];
    for (const launchInfo of launchCollection) {
      const launchParams = {
        showRocket: selectedLaunch === launchInfo._id,
        showHideThisRocket: () => handleSelectLaunch(launchInfo._id),
        ...launchInfo
      }
      launches.push(
        <div key={launchInfo._id}>
          <Launch {...launchParams} />
        </div>
      )
    }
    return launches;
  }

  return(
    <div>
      <h2> SpaceX launches </h2>
      { generateLaunchesList() }
    </div>
  );
};

export default ConnectedView(LaunchesView, 'launches');
