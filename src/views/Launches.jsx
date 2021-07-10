import React from 'react';
import ConnectedView from './ConnectedView';
import LaunchItem from '../components/LaunchItem';
import useLaunches from '../hooks/useLaunches'

const LaunchList = () => {
  const {
    launches,
    loading,
    error,
    currentLaunch,
    toggleLaunch,
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

  return <ul>
      {
        launches.map(launch => <LaunchItem 
          key={launch.flight_number}
          missionName={launch.mission_name}
          flightNumber={launch.flight_number}
          rocketId={launch.rocket.rocket.id}
          costPerLaunch={launch.rocket.rocket.cost_per_launch}
          description={launch.rocket.rocket.description}
          onClick={() => toggleLaunch(launch)}
          isSelected={launch.flight_number === currentLaunch.flight_number}
        />)
      }
    </ul>
}


export default ConnectedView(LaunchList, 'launches');
