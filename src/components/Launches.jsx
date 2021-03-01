import React, { useMemo } from 'react';

import Launch from '../components/Launch';

const Launches = ({ launches }) => {
  const sortedLaunches = useMemo(() => {
    return launches.sort((a, b) => a.flight_number - b.flight_number)
  }, [launches]);

  return (
    <ul>
      {sortedLaunches.map((launch) => {
        return (
          <Launch
            key={launch.id}
            launch={launch}
          />
        )
      })}
    </ul>
  );
};

export default Launches;
