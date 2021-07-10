import React from 'react';
import PropTypes from 'prop-types';

const LaunchPanel = () => {
  return <div>Launch Panel</div>
}

LaunchPanel.propTypes = {
  rocketId: PropTypes.string.isRequired,
  costPerLaunch: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default LaunchPanel