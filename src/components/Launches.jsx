import React, { useMemo, useState } from 'react';

import Launch from '../components/Launch';

const Launches = ({ launches }) => {
  const sortedLaunches = useMemo(() => {
    return launches.sort((a, b) => a.flight_number - b.flight_number)
  }, [launches]);

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
      {sortedLaunches.map((launch) => {
        return (
          <li key={launch.id}>
            <Launch
              launch={launch}
              active={launch.id === activeLaunchId}
              onClick={() => handleClick(launch.id)}
            />
          </li>
        )
      })}
    </ul>
  );
};

export default Launches;
