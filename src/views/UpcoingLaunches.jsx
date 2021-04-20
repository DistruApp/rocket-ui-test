import React  from 'react';
import {useUpcomingLaunches} from "../hooks/launchesProvider";
import LanchesTable from "../components/LaunchesTable";

const UpcomingLaunchesView = () => {
    const {upcomingLaunches, isfetchingUpComingLaunches} = useUpcomingLaunches();

    if (isfetchingUpComingLaunches) {
        return <div> LOADING </div>;
    }

    if (!upcomingLaunches.length) {
        return <div> NO DATA </div>;
    }

    return (
        <div>
            <LanchesTable launches={upcomingLaunches}/>
        </div>
    )
}

export default UpcomingLaunchesView
