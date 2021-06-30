import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { routerActions } from 'react-router-redux';
import clsx from 'clsx';
import SvgIcons from '../shared/SvgIcon';

const Navigation = (props) => {
  const { location } = useHistory();
  // const location = { pathname: '' }

  return <ul>
    <li className={clsx({ selected: location.pathname.indexOf('launches') > -1 })}>
      <Link to="/launches">
        <div style={{ display: 'flex' }}>
          <SvgIcons.Rocket /><h4>Launches</h4>
        </div>
      </Link>
    </li>
  </ul>
};

export default Navigation;
