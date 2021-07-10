import React from 'react';
import PropTypes from 'prop-types';

const LaunchItem = ({
  missionName,
  flightNumber,
  onClick,
  rocketId,
  costPerLaunch,
  description,
  isSelected
}) => <li onClick={onClick}>
    <h2>{missionName}</h2>
    <div> Flight Number: {flightNumber} </div>
    {isSelected && <div>
      <p>{rocketId}</p>
      <p>{costPerLaunch}</p>
      <p>{description}</p>
    </div>}
  </li>

LaunchItem.propTypes = {
  missionName: PropTypes.string.isRequired,
  flightNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  rocketId: PropTypes.string.isRequired,
  costPerLaunch: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
}

export default LaunchItem