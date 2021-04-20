import React from 'react';
import { Link } from 'react-router-dom';
import "styles/pageStyles/navbar.sass";

const Navigation = () => (
  <div>
      <nav className="nav-menu active">
          <ul className="nav-menu-items">
              <li className="nav-text">
                  <Link to="/">
                      <span>All Launches</span>
                  </Link>
              </li>
              <li className="nav-text">
                  <Link to="/past">
                      <span>Past</span>
                  </Link>
              </li>
              <li className="nav-text">
                  <Link to="/upcoming">
                      <span>Upcoming</span>
                  </Link>
              </li>
          </ul>
      </nav>
  </div>

);

export default Navigation;
