import React, { useContext } from 'react';
import Launch from './Launch';
import { store } from "../stores/store";

const LaunchesContainer = () => {
    const { state } = useContext(store);

    if (state.ui.error.show) {
        return (
            <>
                <h2>SpaceX Launches</h2>
                { state.ui.error.msg }
            </>
        );
    }

    if (state.ui.loading ) {
        return (
            <>
                <h2>SpaceX Launches</h2>
                <span>
                    Loading launch data...
                </span>
            </>
        );
    }

    if (state.launches.length > 0) {
        return (
            <>
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
            </>
        );
    }
    return null;
}

export default LaunchesContainer;
