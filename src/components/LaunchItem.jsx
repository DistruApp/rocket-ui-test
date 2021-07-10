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
}) => <li>
    <button onClick={onClick} onKeyPress={onClick} type="button">
      <h2>{missionName}</h2>
    </button>
    
    <div> Flight Number: {flightNumber} </div>

    {isSelected && <div>
      <h3>ROCKET:</h3>
      <div style={{display: 'flex', alignContent: 'space-between'}}>
        <div stlye={{ flex: 3 }}>
          <p>Name: {rocketId}</p>
          <p>Cost Per Rocket: {costPerLaunch}</p>
        </div>
        <p style={{ flex: 1, paddingLeft: 25 }}>{description}</p>
      </div>
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