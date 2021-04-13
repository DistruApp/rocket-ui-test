import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ConnectedView from './ConnectedView';
import { fetchLaunchesIfNeeded } from "../actions/Launches";
import launch from '../components/Launch';

const launchesView = ({ dispatch, launchCollection }) => {

  // This is essentially is the same as componentDidMount
  // When the function component runs for the first time this
  // will trigger. The second argument is tracked for the life
  // of the functional component. The use effect only triggers
  // when the second argument changes. Since we're passing a
  // constant value, it'll only fire on the first run
  useEffect(() => {
    fetchLaunchesIfNeeded({ dispatch, launchCollection});
  }, [])

  const generateLaunchesList = () => {
    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];
    for (const launchInfo of launchCollection.launches) {
      launches.push(
        <li key={launchInfo._id}>
          {launch(launchInfo)}
        </li>
      )
    }
    return <ul>{launches}</ul>;
  }

  return(
    <div>
      <h2> SpaceX launches </h2>
      { generateLaunchesList() }
    </div>
  );
};

launchesView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  // TODO: It would be nice to be more specific and not disable this
  // I could be more specific. It's the LaunchCollectionReducer state
  launchCollection: PropTypes.object.isRequired
}

export default ConnectedView(launchesView, 'launches');
