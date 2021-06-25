import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { store } from "../../stores/store";
import LaunchDetail from "./LaunchDetail";

const Launch = ({ launch }) => {
    const { dispatch, state } = useContext(store);

    const showLaunchDetail = state.ui.showLaunchDetail.show && state.ui.showLaunchDetail.id === launch.id;

    const toggleShowDetail = (launchId) => {
        dispatch({type: 'set-show-launch-detail', payload: {show: !showLaunchDetail, id: launchId}});
    }

    return (
        <div className="launch-container"
            onClick={() => toggleShowDetail(launch.id)}
        >
            <h2>
                { launch.name }
            </h2>
            <div className="launch-overview">
                <div>
                    <h5>Flight Number</h5>
                    <span>
                        { launch.flight_number }
                    </span>
                </div>
                <div>
                    <h5>
                        Success
                    </h5>
                    <span>
                        { launch.success ? 'Yes' : 'No' }
                    </span>
                </div>
            </div>
            {
                showLaunchDetail && <LaunchDetail launch={launch} />
            }
        </div>
    );
}

Launch.propTypes = {
    launch: PropTypes.shape({
        id: PropTypes.string.isRequired,
        flight_number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        success: PropTypes.bool.isRequired,
    }).isRequired
}

export default Launch;
