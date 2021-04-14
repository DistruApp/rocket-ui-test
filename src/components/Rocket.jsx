/* eslint-disable camelcase */ // Because it appears we're stuck with it for the time being
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRocket } from '../http';

const hookForRocketInfo = (rocketId, setLoading) => {
  // where we store the data after it's gotten, before returning it
  const [ rocketInfo, setRocketInfo ] = useState({});

  const fetchRocketData = async () => fetchRocket(rocketId);;

  useEffect(() => {
    setLoading(true);
    fetchRocketData().then(data => {
      setRocketInfo(data);
      setLoading(false);
    });
  }, []);

  return rocketInfo;
};

const Rocket = ({rocket_id}) => {
  const [loading, setLoading] = useState(true);
  const rocketInfo = hookForRocketInfo(rocket_id, setLoading);

  const renderRocket = () => {
    if (loading) {
      return <span>Loading...</span>;
    }
    
    if (!loading && rocketInfo.length === 0) {
      return <span>Error getting data, try again later</span>;
    }

    return (
      <div>
        <h2> { rocketInfo.rocket_name } </h2>
        <div> Rocked ID: { rocketInfo.rocket_id }</div>
        <div> Cost per Launch: { rocketInfo.cost_per_launch }</div>
        <div> Description: { rocketInfo.description }</div>
      </div>
    );
  };

  return (
    <div>
      {renderRocket()}
    </div>
  );
 };

Rocket.propTypes = {
  rocket_id: PropTypes.string.isRequired,
}

export default Rocket;
