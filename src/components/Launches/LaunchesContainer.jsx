import React, { useContext } from 'react';
import Launch from './Launch';
import { store } from "../../stores/store";
import ErrorMessage from "../utils/ErrorMessage";
import Loading from "../utils/Loading";

const LaunchesContainer = () => {
    const { state } = useContext(store);

    return (
        <>
            <h2>
                SpaceX Launches
            </h2>
            {
                state.ui.error.show &&
                    <ErrorMessage />
            }
            {
                state.ui.loading &&
                    <Loading />
            }
            {
                state.launches.length > 0 &&
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

export default LaunchesContainer;
