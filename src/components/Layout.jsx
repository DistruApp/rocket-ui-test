import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({children}) => (
  <main>
    <h3>
      Sinan Talha Rocket-Ui Test
    </h3>
    <section>
      { children }
    </section>
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};