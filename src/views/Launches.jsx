import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import Launch from '../components/Launch';
import { fetchLaunches } from '../http';

const hookForLaunchesData = (setLoading) => {
  // where we store the data after it's gotten, before returning it
  const [ launchesInfo, setLaunchesInfo ] = useState(null);

  // fetch the data
  const fetchLaunchesData = async () => fetchLaunches();

  // When we're loading data, loading will be set to true. Once the
  // data is retrieved this will be updated to false.
  // The second param to useEffect, `[]`, makes it so the useEffect
  // is only triggered on the initial load
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
  // for tracking if we're loading data
  const [loading, setLoading] = useState(false);
  // for tracking which launch is selected to show rocket info
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  // the list of launches
  const launchCollection = hookForLaunchesData(setLoading);

  // This function is passed to the Launches component so
  // that we can keep track of which launch is selected in
  // this components state
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
