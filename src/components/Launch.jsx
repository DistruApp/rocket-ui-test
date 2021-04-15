/* eslint-disable camelcase */ // Because it appears we're stuck with it for the time being
import React from 'react';
import PropTypes from 'prop-types';
import Roc from './Rocket';

const Launch = ({mission_name, flight_number, rocket, showRocket, showHideThisRocket}) => {
  // The button calls the passed in function from the parent component
  // to set the state. In the event that we one day reuse this component
  // to a standalone page or something, should refactor it to keep track
  // of the show rocket state here and the passed in function from the parent
  // should be option and when present called to inform the parent that
  // the button was cicked. But for now, why do the extra work.
  const showHideRocketButton = () => (
    <button type="button" onClick={() => showHideThisRocket()}>
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
  rocket: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  showHideThisRocket: PropTypes.func.isRequired
}

export default Launch;
