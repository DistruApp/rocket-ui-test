import React from 'react';
import { useDispatch } from 'react-redux';
import { collapseLaunch, expandLaunch } from "../actions/Launches";

const Launch = props => {
  const dispatch = useDispatch();
  const launch = props.launch;
  const expanded = launch.expanded

  const handleClick = () => {
    if (expanded) {
      dispatch(collapseLaunch(launch.id))
    } else {
      dispatch(expandLaunch(launch.id))
    }
  }

  let extraInfo;

  if (expanded) {
    extraInfo = <div>
      <div>Rocket ID: {launch.rocket.id} </div>
      <div>Rocket Cost Per Launch: {launch.rocket.cost_per_launch} </div>
      <div>Rocket Description: {launch.rocket.description} </div>
    </div>
  }

  return (
    <li onClick={handleClick}>
      <h2> {launch.name} </h2>
      <div> Flight Number: {launch.flight_number} </div>
      {extraInfo}
    </li>
  );
}

export default Launch;
