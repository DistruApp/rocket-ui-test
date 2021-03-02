import React from 'react';
import { connect } from "react-redux";

import { shouldFetchRocket, fetchRocket } from "../actions/Rockets";
import { getRocket } from "../queries/Rockets";
import DetailedRocket from "./DetailedRocket";

const Launch = ({ launch, active, rocket, dispatch, onClick }) => {
  const rocketId = launch.rocket;
  // Fetching in this component so that when fetch occurs, only this component
  // updates and not all the other launches
  if (active && !rocket) fetchRocket(dispatch, rocketId);

  return (
    <div>
      <h2 style={{ color: '#1a0dab', cursor: 'pointer' }} onClick={() => onClick()}> { launch.name } </h2>
      <div> Flight Number: { launch.flight_number } </div>
      { active && rocket && rocket.fetching && 'Loading...' }
      { active && rocket && !rocket.fetching && <DetailedRocket rocket={rocket} /> }
    </div>
  );
}

const mapStateToProps = ({ rocketCollection }, { launch: { rocket: rocketId } }) => {
  const rocket = getRocket(rocketCollection, rocketId);
  return { rocket }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Launch);
