import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SpaceXLogo from '../../styles/img/SpaceX-Logo-small.png';

const Layout = ({
  pageName, Navigation, children
}) => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen)
  }

  return <main className={`${pageName} layout`}>
    <nav className={clsx({ open: navDrawerOpen })}>
      <div className="nav-drawer-title-bar">
        {/* NAV DRAWER CLOSE BUTTON */}
        <div className="nav-drawer-toggle-close" onClick={toggleNavDrawer} role="button">
          <div>
            <div />
          </div>
        </div>
        <div className="drawer-title">
          <img className="logo" src={SpaceXLogo} alt="SpaceX Logo" />
        </div>
      </div>
      <Navigation />
    </nav>

    <section>
      <div className="route-title-bar">
        {/* NAV DRAWER OPEN BUTTON */}
        <div className="nav-drawer-toggle" onClick={toggleNavDrawer} role="button"><div /><div /><div /></div>
        <h2 className="route-title"> SpaceX Launch Viewer </h2>
      </div>

      {children}
    </section>
  </main >
};

Layout.propTypes = {
  pageName: PropTypes.string.isRequired,
  Navigation: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

export default Layout;
