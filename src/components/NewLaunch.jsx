// Functional component to display a launch
import React, { useState, useEffect } from 'react';
import SpaceXService from "../services/SpaceXService";

// Add commas between three digits for readability
const numberFormatter = (dollar) => dollar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export default function Launch(props) {
   const { launch, selected, onClickHandler } = props;
   const [rocket, setRocket] = useState();
   useEffect(() => {
      if (selected && !rocket) {
         SpaceXService.getRockets(launch.rocket).then(res => setRocket(res.data));
      }
   }, [selected])

   return (
      <li onClick={() => onClickHandler(launch.flight_number)}>
        <h2> { launch.name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
        {selected && (
          <div>
            <div>Rocket ID: { launch.rocket } </div>
            {rocket ? <div>Cost: ${ numberFormatter(rocket.cost_per_launch) }</div> : null}
            <div>Description: { launch.details } </div>
          </div>
        )}
      </li>
    );
}