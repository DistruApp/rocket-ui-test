import React  from 'react';
import {useLaunches} from "../hooks/launchesProvider";
import LanchesTable from "../components/LaunchesTable";

const AllLaunchesView = () => {
  const {launches, isfetchingLaunches} = useLaunches();

  if (isfetchingLaunches) {
    return <div> LOADING </div>;
  }

  if (!launches.length) {
    return <div> NO DATA </div>;
  }

  return (
      <div>
          <LanchesTable launches={launches}/>
      </div>
  )
}

export default AllLaunchesView
