import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import MasterLayoutHoc from '../components/MasterLayoutHoc';
import { shouldFetchLaunches, fetchLaunches } from "../actions/Launches";
import Launches from '../components/Launches';

const LaunchesView = ({ dispatch, launchCollection }) => {
  useEffect(() => {
    if (shouldFetchLaunches(launchCollection)) fetchLaunches(dispatch);
  }, [])

  const { launches } = launchCollection;

  if (launchCollection.fetching) {
    return <div> LOADING </div>;
  }

  if (!launches.length) {
    return <div> NO DATA </div>;
  }

  return (
    <div>
      <h2> SpaceX launches </h2>
      <Launches launches={launches}/>
    </div>
  );
};
LaunchesView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  launchCollection: PropTypes.shape({
    fetching: PropTypes.bool,
    launches: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
};


const mapStateToProps = ({ launchCollection }) => ({ launchCollection });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterLayoutHoc(LaunchesView, 'launches'));
