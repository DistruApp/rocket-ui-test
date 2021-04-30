import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import NewLaunch from "../components/NewLaunch";

class LaunchesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlightNumber: null,
    }
  }

  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection } = this.props;
    const { selectedFlightNumber } = this.state;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    let launches = [];

    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];

      launches.push(
        <NewLaunch {...{
          key: launch.flight_number,
          launch,
          onClickHandler: this.setSelectedFlightNumber,
          selected: launch.flight_number === selectedFlightNumber
        }} />

      )
    }

    return <ul>{launches}</ul>;
  }

  setSelectedFlightNumber = (flightNumber = null) => {
    const { selectedFlightNumber } = this.state;
    this.setState({ selectedFlightNumber: selectedFlightNumber !== flightNumber ? flightNumber : null});
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
