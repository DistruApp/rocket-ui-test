/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import clsx from 'clsx';
import DisplayField from './DisplayField'

const LaunchCard = ({ launch = {}, launchOnClick, selected }) => {
  const { mission_name, flight_number, launch_success } = launch;
  const missionPatch = _.get(launch, 'links.mission_patch_small');


  return <li className={clsx('launch-card', { selected })} onClick={() => launchOnClick(launch)} role="button">
    <div className="launch-card-image">
      {missionPatch ? <img src={missionPatch} alt={`${mission_name}`} /> : <div className="mission-patch-not-found">MISSION PATCH NOT AVAILABLE</div>}
    </div>
    <div className="launch-card-detail">
      <div>
        <h3> {mission_name} </h3>
      </div>
      <DisplayField label="Flight Number" value={flight_number} />
      <div>
        <h5 className={clsx({ 'text-success': launch_success, 'text-error': !launch_success })} >MISSION {launch_success ? 'SUCCESS' : 'FAILURE'}</h5>
      </div>
    </div>
  </li>
}

LaunchCard.propTypes = {
  launch: PropTypes.object.isRequired,
  launchOnClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default LaunchCard;
