import React from 'react';
import PropTypes from 'prop-types';

const DetailedRocket = ({ rocket }) => (
  <div>
    <div> Rocket ID: { rocket.id } </div>
    <div> Rocket Cost per launch: { rocket.cost_per_launch } </div>
    <div> Rocket Description: { rocket.description } </div>
  </div>
);
DetailedRocket.propTypes = {
  rocket: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cost_per_launch: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default DetailedRocket
