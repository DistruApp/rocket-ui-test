import React from 'react';
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {

  return (
    <main className={`layout`}>
        <Navigation/>
        <section>
            { children }
        </section>
    </main>
  );
};

export default Layout;
