import React from 'react';
import { Link } from 'react-router-dom';
import { Blockquote, Text } from '@arwes/core';

const Navigation = () => (
  <Link to="/launches">
    <Blockquote>
      <Text>Launches</Text>
    </Blockquote>
  </Link>
);

export default Navigation;