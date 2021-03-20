import React from 'react';

const Launch = ({launch}) => (
  <li>
    <h2> { launch.mission_name } </h2>
    <div> Flight Number: { launch.flight_number } </div>
  </li>
)


export default Launch;
