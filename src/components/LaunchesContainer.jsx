import React, { useContext } from 'react';
import Launch from './Launch';
import { store } from "../stores/store";
import ErrorMessage from "./utils/ErrorMessage";
import Loading from "./utils/Loading";

const LaunchesContainer = () => {
    const { state } = useContext(store);

    if (state.ui.error.show) {
        return (
            <>
                <h2>SpaceX Launches</h2>
                <ErrorMessage />
            </>
        );
    }

    if (state.ui.loading ) {
        return (
            <>
                <h2>SpaceX Launches</h2>
                <Loading />
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
