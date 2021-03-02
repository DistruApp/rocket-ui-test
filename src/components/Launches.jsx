import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Launch from "./Launch";

const Launches = ({ launches }) => {
  const sortedLaunches = useMemo(() => launches.sort((a, b) => a.flight_number - b.flight_number), [launches]);

  const [activeLaunchId, setActiveLaunchId] = useState(null);
  const handleClick = (launchId) => {
    if (activeLaunchId === launchId) {
      setActiveLaunchId(null);
    } else {
      setActiveLaunchId(launchId);
    }
  }

  return (
    <ul>
      {sortedLaunches.map((launch) => (
          <li key={launch.id}>
            <Launch
              launch={launch}
              active={launch.id === activeLaunchId}
              onClick={() => handleClick(launch.id)}
            />
          </li>
        ))}
    </ul>
  );
};
Launches.propTypes = {
  launches: PropTypes.arrayOf(
    PropTypes.shape({
      flight_number: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Launches;
