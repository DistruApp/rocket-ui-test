import React, { useMemo, useState } from 'react';

import Launch from '../components/Launch';

const Launches = ({ launches }) => {
  const sortedLaunches = useMemo(() => {
    return launches.sort((a, b) => a.flight_number - b.flight_number)
  }, [launches]);

  const [activeLaunchId, setActiveLaunchId] = useState(null);

  return (
    <ul>
      {sortedLaunches.map((launch) => {
        return (
          <li
            onClick={() => setActiveLaunchId(launch.id)}
            key={launch.id}
          >
            <Launch
              launch={launch}
              active={launch.id === activeLaunchId}
            />
          </li>
        )
      })}
    </ul>
  );
};

export default Launches;
