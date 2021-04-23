import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "styles/pageStyles/navbar.sass";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {LaunchesContext} from "../hooks/launchesProvider";

const Navigation = () => {
    const { usePanel, setUsePanel } = useContext(LaunchesContext);

    const handleSwitch = () => {
        setUsePanel(!usePanel)
    }
    return (
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
                    <li className="nav-text">
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={usePanel}
                                    onChange={handleSwitch}
                                    name="usePanel"
                                    color="primary"
                                />
                            }
                            label="Use Panel"
                        />
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navigation;
