import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import Launch from "../components/Launch";

class LaunchesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlightId: null,
    }
  }

  componentDidMount() {
    const { fetchLanuches } = this.props;
    fetchLanuches();
  }

  getContent() {
    const { spacex } = this.props;
    const { selectedFlightId } = this.state;

    if (spacex.fetchingLaunches) {
      return <div> LOADING </div>;
    }

    if (spacex.launches.length === 0) {
      return <div> NO DATA </div>;
    }

    const launches = Object.values(spacex.launches).map(launch => 
      <Launch {...{
        key: launch.id,
        launch,
        rocketDetails: spacex.rockets[launch.rocket],
        onClickHandler: this.setSelectedFlightId,
        selected: launch.id === selectedFlightId
      }} />
    );

    return launches;
  }

  setSelectedFlightId = (flightNumber = null) => {
    const { spacex, fetchRocket } = this.props
    const { selectedFlightId } = this.state;
    const rocketId = spacex.launches[flightNumber].rocket;
    fetchRocket(rocketId);
    this.setState({ selectedFlightId: selectedFlightId !== flightNumber ? flightNumber : null});
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
