import React from 'react';
import PropTypes from 'prop-types';

const LaunchPanel = ({
  rocketId,
  costPerLaunch,
  description
}) => {
  return <div>
    <p>{rocketId}</p>
    <p>{costPerLaunch}</p>
    <p>{description}</p>
  </div>
}

LaunchPanel.propTypes = {
  rocketId: PropTypes.string.isRequired,
  costPerLaunch: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default LaunchPanel