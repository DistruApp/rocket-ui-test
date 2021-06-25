import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { store } from "../../stores/store";

const LaunchDetail = ({ launch }) => {
    const { state } = useContext(store);

    const rocket = state.rockets.filter(r => r.id === launch.rocket)[0];

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
                                <h5>
                                    Launched by
                                </h5>
                                <span>
                                    { rocket.company }
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

LaunchDetail.propTypes = {
    launch: PropTypes.shape({
        details: PropTypes.string,
        rocket: PropTypes.shape({
            cost_per_launch: PropTypes.number,
            name: PropTypes.string,
            company: PropTypes.string,
        })
    }).isRequired
}

export default LaunchDetail;
