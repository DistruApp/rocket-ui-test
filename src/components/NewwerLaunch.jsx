// Functional component to display a launch
import React from 'react';

// Add commas between three digits for readability
// TODO move to a helper utility area
const numberFormatter = (dollar) => dollar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export default function Launch(props) {
   const { launch, rocketDetails, selected, onClickHandler } = props;

   return (
      <li onClick={() => onClickHandler(launch.id)}>
        <h2> { launch.name }: { launch.flight_number } </h2>
        {selected && rocketDetails && (
          <div>
            <div>Rocket Name: { rocketDetails.name }</div>
            <div>Cost: ${ numberFormatter(rocketDetails.cost_per_launch) }</div>
            <div>Description: { rocketDetails.description } </div>
            <div>Rocket ID: { rocketDetails.id } </div>
          </div>
        )}
      </li>
    );
}