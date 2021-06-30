import React, { useState } from 'react';
import clsx from 'clsx'
import SpaceXLogo from '../../styles/img/SpaceX-Logo-small.png'

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
        <div className="nav-drawer-toggle-close" onClick={toggleNavDrawer}>
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
        <div className="nav-drawer-toggle" onClick={toggleNavDrawer} role="button"><div /><div /><div /></div>
        <h2 className="route-title"> SpaceX Launches </h2>
      </div>

      {children}
    </section>
  </main >
};

export default Layout;
