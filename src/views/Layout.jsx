import React, {useContext} from 'react';
import Navigation from "../components/Navigation";
import {SingleLaunchModal} from "../components/SingleLaunchModal";
import {LaunchesContext} from "../hooks/launchesProvider";

const Layout = ({ children }) => {
    const { setShowModal, showModal, launchToView } = useContext(LaunchesContext);

    return (
        <main className={`layout`}>
            <Navigation/>
            <section>
                { children }
            </section>
            <SingleLaunchModal showModal={showModal} setShowModal={setShowModal} launch={launchToView}/>
        </main>
      );
};

export default Layout;
