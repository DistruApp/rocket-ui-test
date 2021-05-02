import React, {useState} from 'react';
import { Text } from '@arwes/core';

const Launch = props => {
  const { launch, getDetail } = props
  
  return (
    <li onClick={() => getDetail(launch.flight_number)} style={{width: '40%'}}>
      <Text as='h4' style={{cursor: 'pointer'}}>&nbsp;{ launch.mission_name }</Text>
    </li>
  );
}

export default Launch;
