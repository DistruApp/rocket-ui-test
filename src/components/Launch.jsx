/* eslint-disable camelcase */ // Because it appears we're stuck with it for the time being
import React from 'react';
import PropTypes from 'prop-types';
import Roc from './Rocket';

const Launch = ({mission_name, flight_number, rocket, showRocket, showHideThisRocket}) => {
  const showHideRocketButton = () => (
    <button onClick={() => showHideThisRocket()}>
      { showRocket ? '-' : '+'}
    </button>
  );

  return (
    <div>
      <h2> {showHideRocketButton()} Flight #{ flight_number }: { mission_name } </h2>
      { showRocket ? <Roc rocketId={rocket.rocket_id} /> : null }
    </div>
  );
};

Launch.propTypes = {
  mission_name: PropTypes.string.isRequired,
  flight_number: PropTypes.number.isRequired,
  showRocket: PropTypes.bool.isRequired,
  rocket: PropTypes.object.isRequired,
  showHideThisRocket: PropTypes.func.isRequired
}

export default Launch;
