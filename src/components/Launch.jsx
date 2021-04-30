import React, { Component } from 'react';

// TODO: Cost Per Launch is a rocket property not passed in the existing data set.
class Launch extends Component {

  render() {
    const { launch, selected, onClickHandler } = this.props;
    return (
      <li onClick={() => onClickHandler(launch.flight_number)}>
        <h2> { launch.name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
        {selected && (
          <div>
            <div>Rocket ID: { launch.rocket.rocket_id } </div>
            <div>Description: { launch.details } </div>
          </div>
        )}
      </li>
    );
  }
}

export default Launch;
