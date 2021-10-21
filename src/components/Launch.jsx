import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRocket } from "../actions/rocket.actions";

export const Launch = ({launch, onClick, isOpen}) => {
  const dispatch = useDispatch();
  const [rocketDetails, setRocketDetails] = useState({
    id: '',
    name: '',
    costPerLaunch: 0,
    description: ''
  });
  const { rocket } = launch;

  const handleClick = () => {
    if(!isOpen){
      fetchRocket(dispatch, rocket.rocket_id).then(data => setRocketDetails({id: data.payload.rocket.id, name:data.payload.rocket.rocket_name, costPerLaunch: data.payload.rocket.cost_per_launch, description:data.payload.rocket.description}));
      onClick(launch._id);
    } else {
      onClick(0);
    }
  }
  return(
  <div className="grid-item">
    <h6 className="no-margin-y"> Mission Name: { launch.mission_name } </h6>
    <h6 className="only-top-margin-y"> Flight Number: { launch.flight_number } </h6>
    <button type="button" onClick={handleClick}>{`${isOpen ? 'Hide' : 'See'} Rocket Details`}</button>
    {isOpen && 
    <table>
      <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Cost/Launch</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{rocketDetails.id}</td>
      <td>{rocketDetails.name}</td>
      <td>{rocketDetails.costPerLaunch}</td>
      <td>{rocketDetails.description}</td>
    </tr>
    </tbody>
    </table>
    }
  </div>
  );
}

Launch.propTypes = {
  launch: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};