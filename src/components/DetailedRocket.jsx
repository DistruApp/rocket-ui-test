import React from 'react';

const DetailedRocket = ({ rocket: { id, cost_per_launch, description } }) => {
  return (
    <div>
      <div> Rocket ID: { id } </div>
      <div> Rocket Cost per launch: { cost_per_launch } </div>
      <div> Rocket Description: { description } </div>
    </div>
  );
}

export default DetailedRocket
