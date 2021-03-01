import React from 'react';

import Launch from '../components/Launch';

const Launches = ({ launches }) => {
  return (
    <ul>
      {launches.map((launch) => {
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
