/* eslint-disable camelcase */ // Because it appears we're stuck with it for the time being
import React from 'react';
import PropTypes from 'prop-types';

const Launch = ({mission_name, flight_number}) => (
  <div>
    <h2> { mission_name } </h2>
    <div> Flight Number: { flight_number } </div>
  </div>
);

Launch.propTypes = {
  mission_name: PropTypes.string.isRequired,
  flight_number: PropTypes.number.isRequired,
}

export default Launch;
