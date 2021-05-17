import React, { Component } from 'react';
import Rocket from '../components/Rocket';

class Launch extends Component {

  render() {

    let launch = this.props.launch;

    return (
      <li>
        <h2> { launch.mission_name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
        <Rocket rocketId={ launch.rocket.rocket_id } />
      </li>
    );
  }
}

export default Launch;
