import React from 'react';
import PropType from 'prop-types';

const Layout = ({pageName, menu, children}) => (
  <main className={`${pageName} layout`}>
    <nav>
      { menu }
    </nav>

    <section>
      { children }
    </section>
  </main>
);

Layout.propTypes = {
  pageName: PropType.string.isRequired,
  menu: PropType.element.isRequired,
  children: PropType.element.isRequired
}

export default Layout;
