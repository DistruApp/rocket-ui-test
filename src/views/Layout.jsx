import React from 'react';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => {

    return (
        <div>
            <main className="layout">
                <nav>
                    <Navigation />
                </nav>

                <section>
                    { children }
                </section>
            </main>
        </div>
    );
};

export default Layout;
