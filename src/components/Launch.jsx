import React from 'react';
import { connect } from "react-redux";

import { shouldFetchRocket, fetchRocket } from "../actions/Rockets";
import { getRocket } from "../queries/Rockets";
import DetailedRocket from "./DetailedRocket";

const Launch = ({ launch, active, rocket, dispatch }) => {
  const rocketId = launch.rocket;
  // Fetching in this component so that when fetch occurs, only this component
  // updates and not all the other launches
  if (active && !rocket) fetchRocket(dispatch, rocketId);

  return (
    <div>
      <h2> { launch.name } </h2>
      <div> Flight Number: { launch.flight_number } </div>
      { active && rocket && <DetailedRocket rocket={rocket} /> }
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
