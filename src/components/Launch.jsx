import React from 'react';
import LaunchDetails from './LaunchDetails';

const Launch = ({launch, rocketCollection, handleClick, activeLaunch}) => {
  const {mission_name: missionName, flight_number: flightNumber, rocket: {rocket_id: rocketId}} = launch
  return(
    <li>
        <a href="#" onClick={(event) => handleClick(event, flightNumber, rocketId)}>
        <h2>{ missionName }</h2>
        <div>Flight Number: { flightNumber }</div>
        </a>

      <LaunchDetails launch={launch} rocketCollection={rocketCollection} activeLaunch={activeLaunch}/>
    </li>
  )
}


export default Launch;
