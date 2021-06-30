/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import clsx from 'clsx';
import { TabBar, Tab } from './tabs'
import DisplayField from './DisplayField'



const RocketTab = ({ values }) => <div>
  <div>
    <DisplayField label="Rocket Name" value={values.rocket_name} />
    <DisplayField label="Rocket Type" value={values.rocket_type} />
    <DisplayField label="Rocket Description" value={values.description} />
    <DisplayField label="Cost Per Launch" value={_.get(values, 'cost_per_launch', '').toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
    <DisplayField label="Stages" value={values.stages} />
    <DisplayField label="Success Rate Percent" value={values.success_rate_pct} />
  </div>
</div>

RocketTab.propTypes = {
  values: PropTypes.object.isRequired
}

const MissionDetailsTab = ({ values }) => <div>
  <DisplayField label="Site Name" value={`${_.get(values, 'launch_site.site_name')} - ${_.get(values, 'launch_site.site_name_long')}`} />
</div>

MissionDetailsTab.propTypes = {
  values: PropTypes.object.isRequired
}

const LaunchDetail = ({ currentLaunch = {}, toggleDetailDrawer }) => {
  const { launch = {}, rocket = {} } = currentLaunch;
  const { mission_name, launch_date_local, details, launch_success, launch_failure_details } = launch;

  const missionPatch = _.get(launch, 'links.mission_patch_small');
  const tabs = { rocket: 'Rocket', missionDetails: 'Additional Mission Details' }
  const [selectedTab, setSelectedTab] = useState('rocket');



  const tabOnChange = (value) => {
    setSelectedTab(value);
  }

  return <div className={clsx('launch-detail', { open: currentLaunch.launch })}>
    {currentLaunch.launch ? <React.Fragment>
      <div className="title-bar">
        <button onClick={() => toggleDetailDrawer(false)}><h5>{'< BACK'}</h5></button>
      </div>
      <div className="hero-info">
        <div className="launch-image">
          <div className="launch-image">
            {missionPatch ? <img src={missionPatch} alt={`${launch.mission_name}`} /> : <div className="mission-patch-not-found">MISSION PATCH NOT AVAILABLE</div>}
          </div>

        </div>
        <div className="hero-details">
          <h1>{mission_name}</h1>
          <h4 className="launch-date">{new Date(launch_date_local).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h4>
          <DisplayField label="Launch Description" value={details} />
          <h4 className={clsx({ 'text-success': launch_success, 'text-error': !launch_success })} >MISSION {launch_success ? 'SUCCESS' : 'FAILURE'}</h4>
          {!launch_success && <DisplayField label="Failure Reason" value={_.get(launch_failure_details, 'reason')} />}
        </div>
      </div>
      <div className="launch-detail-tabs">
        <TabBar selectedTab={selectedTab} onChange={tabOnChange}>
          {Object.keys(tabs).map(key => <Tab value={key}><h5>{tabs[key]}</h5></Tab>)}
        </TabBar>
        {selectedTab === 'rocket' && <RocketTab values={rocket} />}
        {selectedTab === 'missionDetails' && <MissionDetailsTab values={launch} />}
      </div>
    </React.Fragment> : <div className="no-selection">
      <h4>Select a launch from the left to view specific details about it</h4>
    </div>

    }


  </div >
}

LaunchDetail.propTypes = {
  currentLaunch: PropTypes.object
}

export default LaunchDetail;