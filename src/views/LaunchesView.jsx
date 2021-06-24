import React, { useContext } from 'react';
import Launch from '../components/Launch';
import { store } from "../stores/store";

const LaunchesView = () => {
    const { state } = useContext(store);

    if (state.ui.error.show) {
        return (
            <div>
                <h2>SpaceX Launches</h2>
                { state.ui.error.msg }
            </div>
        );
    }

    if (state.ui.loading ) {
        return (
            <div>
                <h2>SpaceX Launches</h2>
                <span>
                    Loading launch data...
                </span>
            </div>
        );
    }

    if (state.launches.length > 0) {
        return (
            <div>
                <h2>SpaceX Launches</h2>
                {
                    state.launches.map((launch) => {
                        return (
                            <Launch
                                launch={launch}
                            />
                        );
                    })
                }
            </div>
        );
    }
    return null;
}

export default LaunchesView;