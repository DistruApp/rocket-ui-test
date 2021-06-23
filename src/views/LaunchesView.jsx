import React, { useContext } from 'react';
import Launch from '../components/Launch';
import { store } from "../stores/store";

const LaunchesView = () => {
    const {dispatch, state} = useContext(store);

    if (state.error.show) {
        return (
            <div>
                <h2>SpaceX Launches</h2>
                { state.error.msg }
            </div>
        );
    }

    if (state.loading ) {
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
                                key={launch.id}
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
