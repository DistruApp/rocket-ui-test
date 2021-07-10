import React from 'react';
import PropTypes from 'prop-types';

const LaunchItem = ({
  missionName,
  flightNumber,
  onClick
}) => <li onClick={onClick}>
    <h2>{missionName}</h2>
    <div> Flight Number: {flightNumber} </div>
  </li>

LaunchItem.propTypes = {
  missionName: PropTypes.string.isRequired,
  flightNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LaunchItem