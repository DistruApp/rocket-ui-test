import React, {useContext} from 'react';
import {store} from "../stores/store";

const Launch = ({ launch }) => {
    const { dispatch, state } = useContext(store)

    const costPerLaunch = () => {
        if (launch.rocket) {
            const rocket = state.rockets.filter(rocket => rocket.id === launch.rocket)
            if (rocket[0] && rocket[0].cost_per_launch) {
                return `$${rocket[0].cost_per_launch.toLocaleString()}`;
            }
        }
        return null;
    }

    return (
        <>
            <div className="rocket-detail">
                <>
                    {
                        launch.rocket &&
                            <div>
                                <h5>
                                    Rocket ID
                                </h5>
                                <span>
                                    { launch.rocket }
                                </span>
                            </div>
                    }
                    <div>
                        <h5>
                            Cost per Launch
                        </h5>
                        <span>
                            { costPerLaunch() }
                        </span>
                    </div>
                </>
            </div>
            <div className="launch-detail">
                {
                    launch.details &&
                        <div>
                            <h5>
                                Details
                            </h5>
                            <span>
                                { launch.details }
                            </span>
                        </div>
                }
            </div>
        </>
    );
}

export default Launch;