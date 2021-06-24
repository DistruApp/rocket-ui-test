import React from 'react';

const Launch = ({ launch }) => {
    return (
        <li>
            <h2> { launch.name } </h2>
            { launch.flight_number &&
                <div> Flight Number: { launch.flight_number } </div>
            }
        </li>
    );
}

export default Launch;