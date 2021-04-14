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

const Rocket = ({rocketId}) => {
  const [loading, setLoading] = useState(true);
  const rocketInfo = hookForRocketInfo(rocketId, setLoading);
  const currencyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

  const renderRocket = () => {
    if (loading) {
      return <span>Loading...</span>;
    }
    
    if (!loading && rocketInfo.length === 0) {
      return <span>Error getting data, try again later</span>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Rocket Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{ rocketInfo.rocket_name }</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>{ rocketInfo.rocket_id }</td>
          </tr>
          <tr>
            <td>Cost Per Launch</td>
            <td>{ currencyFormatter.format(rocketInfo.cost_per_launch) }</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{ rocketInfo.description }</td>
          </tr>
        </tbody>

      </table>
    );
  };

  return (
    <div>
      {renderRocket()}
    </div>
  );
 };

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
}

export default Rocket;
