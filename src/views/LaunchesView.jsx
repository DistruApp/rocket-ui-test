import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchesIfNeeded } from "../actions/launches.actions";
import { Launch } from '../components/Launch';

export const LaunchesView = () => {
  const dispatch = useDispatch();
  const launchCollection = useSelector((state) => state.launchCollection);
  const [launches, setLaunches] = useState([]);
  const [idOfDetailedLaunch, setIdOfDetailedLaunch] = useState(0);
  
  const isLoading = useMemo(() => !launchCollection || launchCollection.fetching, [launchCollection]);
  
  const isError = useMemo(() => !launchCollection.launches.length, [launchCollection]);

  useEffect(() => {
    fetchLaunchesIfNeeded({ dispatch, launchCollection }).then(data => setLaunches(data.payload.launches));
   }, []);

   const handleOpenDetails = (id) => {
    setIdOfDetailedLaunch(id);
   }

   if(isLoading){
    return(
      <div> LOADING </div>
    );
  }
  if(isError){
    return(
      <div> NO DATA </div>
    );
  }

  return(
      <div>
        <h2> SpaceX launches: Total {launches.length}</h2>
        <div className="grid-container">
          {launches.map((launch) => (
            <Launch key={launch._id} launch={launch} onClick={handleOpenDetails} isOpen={idOfDetailedLaunch === launch._id}/>
          ))}
        </div>
      </div>
  );
}
