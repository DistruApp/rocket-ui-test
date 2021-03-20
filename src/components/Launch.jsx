import React from 'react';
import LaunchDetails from './LaunchDetails';

const Launch = ({launch, rocketCollection, handleClick, activeLaunch}) => (
    <li >
        <a href="#" onClick={(event) => handleClick(event, launch.flight_number, launch.rocket.rocket_id)}>
        <h2> { launch.mission_name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
        </a>
      
      <LaunchDetails launch={launch} rocketCollection={rocketCollection} activeLaunch={activeLaunch}/>
    </li>
  )



export default Launch;
