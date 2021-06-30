import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import LaunchService from '../services/LaunchService';
import ConnectedView from './ConnectedView';
import { fetchLaunchesIfNeeded } from "../actions/Launches";
import Launch from '../components/LaunchCard';
import LaunchDetail from '../components/LaunchDetail'

const LaunchesView = ({ dispatch, launchesCollection = {}, launchCollection }) => {

  const { launches = [] } = launchCollection;
  const [currentLaunch, setCurrentLaunch] = useState();
  const [fetchingLaunch, setFetchingLaunch] = useState(false);

  useEffect(() => {
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }, [])

  // I could abstract this out into separate function to handle the component state changes
  // and the fetch separately, but since I'm only making a single HTTP call here,
  // I figured it would be simplest to do everything in one function
  const launchOnClick = (launch) => {

    if (_.get(currentLaunch, 'launch.flight_number') === launch.flight_number) {
      return setCurrentLaunch()
    }

    const rocketId = _.get(launch, 'rocket.rocket_id')
    setFetchingLaunch(true)

    return LaunchService.getRocket(rocketId).then(({ data }) => {
      setCurrentLaunch({ launch, rocket: data })
    }).catch(err => {
      // normally I would do something with this error to surface meaningful information
      // to the end user, but I opted to omit anything for the sake of brevity
    }).finally(() => {
      setFetchingLaunch(false);
    })
  }

  const toggleDetailDrawer = () => {
    setCurrentLaunch()
  }

  return (
    <div className="route-container">
      {/* TODO MAKE THIS SPINNER BETTER */}
      {(!launchCollection || launchCollection.fetching) && <div className="spinner"> LOADING </div>}
      {/* TODO MAKE THIS NO DATA MESSGE BETTER */}
      {!launchCollection.launches.length && <div> NO DATA </div>}
      <div className="launches-wrapper">
        <div className="launches-list-wrapper" style={{ height: '100%' }}>
          <ul className="launches-list">{launches.map(launch => (<Launch {...{
            key: launch.flight_number,
            launch,
            launchOnClick,
            selected: _.get(currentLaunch, 'launch.flight_number') === launch.flight_number
          }} />))}</ul>;
        </div>
        <LaunchDetail currentLaunch={currentLaunch} toggleDetailDrawer={toggleDetailDrawer} />
        {/* <div className="launch-detail" style={{ height: '100%', paddingLeft: '24px' }}>
          {'No Launches'}
        </div> */}
      </div>

      {/* <LaunchDetailModal open={launchDetailModalOpen} currentLaunchDetail={currentLaunchDetail} handleClose={() => setCurrentLaunchDetail()} fetching={fetchingLaunch} /> */}
    </div>
  );
}

LaunchesView.propTypes = {
  dispatch: PropTypes.func,
  launchesCollection: PropTypes.object,
  launchCollection: PropTypes.object
}

export default ConnectedView(LaunchesView, 'launches');
