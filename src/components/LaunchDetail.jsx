import React, {useContext} from 'react';
import { store } from "../stores/store";

const Launch = ({ launch }) => {
    const { dispatch, state } = useContext(store)

    const rocket = state.rockets.filter(rocket => rocket.id === launch.rocket)[0]

    return (
        <>
            <div className="rocket-detail">
                    {
                        launch.rocket && rocket &&
                            <>
                                <div>
                                    <h5>
                                        Rocket Name
                                    </h5>
                                    <span>
                                        { rocket.name }
                                    </span>
                                    <h5>
                                        Rocket ID
                                    </h5>
                                    <span>
                                        { launch.rocket }
                                    </span>
                                </div>
                                <div>
                                    <h5>
                                        Cost per Launch
                                    </h5>
                                    <span>
                                        { `$${rocket.cost_per_launch.toLocaleString()}` }
                                    </span>
                                </div>
                            </>
                    }
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
