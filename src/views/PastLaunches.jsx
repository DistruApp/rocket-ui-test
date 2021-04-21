import React, {useState} from 'react';
import {usePastLaunches} from "../hooks/launchesProvider";
import LanchesTable from "../components/LaunchesTable";

const UpcomingLaunchesView = () => {
    const {pastLaunches, isfetchingPastLaunches} = usePastLaunches();

    if (isfetchingPastLaunches) {
        return <div> LOADING </div>;
    }

    if (!pastLaunches.length) {
        return <div> NO DATA </div>;
    }

    return (
        <div>
            <LanchesTable launches={pastLaunches}/>
        </div>
    )
}

export default UpcomingLaunchesView
