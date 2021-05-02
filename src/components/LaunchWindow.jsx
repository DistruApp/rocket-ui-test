import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Animator } from '@arwes/animation';
import { Text, Figure } from '@arwes/core';

const LaunchWindow = props => {
  const launch = props.launch

  return (
    <Animator animator={{ activate: true, manager: 'stagger' }}>
      <Text as='h1'>
        {launch.mission_name}
      </Text>
      <br/>
      <Text as='h2'>
        Rocket: {launch.rocket.rocket_id}
      </Text>
      <br/>
      <Text as='h3'>
        Cost: ${launch.cost?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </Text>
      <Text as='p'>
        {launch.details}
      </Text>
    <Figure
      src={launch.image || launch.patch || ''}
    >
      {launch.description}
    </Figure>
  </Animator>
  );
};

export default LaunchWindow;
