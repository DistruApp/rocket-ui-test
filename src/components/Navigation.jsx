import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul data-test="headerComponent">
    <li><Link to="/launches" data-test="launchesLink">Launches</Link></li>
  </ul>
);

export default Navigation;
