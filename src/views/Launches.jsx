import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import NewwerLaunch from "../components/NewwerLaunch";

class LaunchesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlightId: null,
    }
  }

  componentDidMount() {
    const { getLanuches } = this.props;
    getLanuches();
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
      <NewwerLaunch {...{
        key: launch.id,
        launch,
        rocketDetails: spacex.rockets[launch.rocket],
        onClickHandler: this.setSelectedFlightId,
        selected: launch.id === selectedFlightId
      }} />
    );

    return <ul>{launches}</ul>;
  }

  setSelectedFlightId = (flightNumber = null) => {
    const { spacex, getRocket } = this.props
    const { selectedFlightId } = this.state;
    const rocketId = spacex.launches[flightNumber].rocket;
    if (spacex.rockets[rocketId] === undefined) {
      getRocket(rocketId);
    }
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
