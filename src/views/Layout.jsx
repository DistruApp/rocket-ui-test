import React, {useContext} from 'react';
import {
    useLocation
} from "react-router-dom";
import Navigation from "../components/Navigation";
import {SingleLaunchModal} from "../components/SingleLaunchModal";
import {SingleLaunchPanel} from "../components/SingleLaunchPanel";
import {LaunchesContext} from "../hooks/launchesProvider";

const Layout = ({ children }) => {
    const { usePanel } = useContext(LaunchesContext);
    const { setShowSingleLaunch, showSingleLaunch, launchToView } = useContext(LaunchesContext);

    return (
        <main className="layout">
            <Navigation/>
            <section>
                { children }
            </section>
            {   usePanel ?
                <SingleLaunchPanel showPanel={showSingleLaunch} setShowPanel={setShowSingleLaunch} launch={launchToView}/> :
                <SingleLaunchModal showModal={showSingleLaunch} setShowModal={setShowSingleLaunch} launch={launchToView}/>
            }
        </main>
      );
};

export default Layout;
