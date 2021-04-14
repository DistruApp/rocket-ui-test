/* eslint-disable camelcase */ // Because it appears we're stuck with it for the time being
import React from 'react';
import PropTypes from 'prop-types';
import Roc from './Rocket';

const Launch = ({mission_name, flight_number, rocket}) => (
  <div>
    <h2> { mission_name } </h2>
    <div> Flight Number: { flight_number } </div>
    { true ? <Roc {...rocket} /> : null }
  </div>
);

Launch.propTypes = {
  mission_name: PropTypes.string.isRequired,
  flight_number: PropTypes.number.isRequired,
  rocket: PropTypes.object.isRequired
}

export default Launch;
