import React from 'react';
import LaunchDetails from './LaunchDetails';

const Launch = ({launch, rocketCollection, handleClick, activeLaunch}) => {
  const {mission_name: missionName, flight_number: flightNumber, rocket: {rocket_id: rocketId}} = launch
  return(
    <li data-test="launchItem">
        <a href="#" data-test="launchLink" onClick={(event) => handleClick(event, flightNumber, rocketId)}>
        <h2 data-test="missionName">{ missionName }</h2>
        <div data-test="flightNumber">Flight Number: { flightNumber }</div>
        </a>

      <LaunchDetails launch={launch} rocketCollection={rocketCollection} activeLaunch={activeLaunch}/>
    </li>
  )
}


export default Launch;
