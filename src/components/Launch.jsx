import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { fetchRocket } from "../actions/Rockets";
import { getRocket } from "../queries/Rockets";
import DetailedRocket from "./DetailedRocket";

export const Launch = ({ launch, active, rocket, dispatch, onClick }) => {
  const rocketId = launch.rocket;
  // Fetching in this component so that when fetch occurs, only this component
  // updates and not all the other launches
  if (active && !rocket) fetchRocket(dispatch, rocketId);

  return (
    <div data-testid={`launch-${launch.id}`}>
      <h2>
        <span
          style={{ color: '#1a0dab', cursor: 'pointer' }}
          data-testid={`launch-click-${launch.id}`}
          onClick={() => onClick()}
          tabIndex="0"
          role="button"
          // on pressing enter, for people with disabilities
          onKeyPress={(e) => e.charCode === 13 && onClick()}
        >
          { launch.name }
        </span>
      </h2>
      <div> Flight Number: { launch.flight_number } </div>
      { active && rocket && rocket.fetching && 'Loading...' }
      { active && rocket && !rocket.fetching && <DetailedRocket rocket={rocket} /> }
    </div>
  );
};
Launch.propTypes = {
  launch: PropTypes.shape({
    flight_number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rocket: PropTypes.string.isRequired
  }).isRequired,
  active: PropTypes.bool.isRequired,
  rocket: PropTypes.shape({
    fetching: PropTypes.bool
  }),
  dispatch: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};
Launch.defaultProps = {
  rocket: null
};

const mapStateToProps = ({ rocketCollection }, { launch: { rocket: rocketId } }) => {
  const rocket = getRocket(rocketCollection, rocketId);
  return { rocket }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Launch);
