import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConnectedView from './ConnectedView';
import { fetchLaunches } from "../actions/Launches";
import Launch from '../components/Launch';

const LaunchesView = () => {
  const dispatch = useDispatch();
  const launches = useSelector(state => state.launchCollection.launches);
  const status = useSelector(state => state.launchCollection.status);
  const error = useSelector(state => state.launchCollection.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLaunches())
    }
  }, [status, dispatch])

  let content;

  if (status === 'loading') {
    content = <div> LOADING </div>
  } else if (status === 'succeeded') {
    content = launches.map(launch => (
      <Launch key={launch.id} launch={launch} />
    ))
  } else if (status === 'failed') {
    content = <div> {error} </div>
  }

  return (
    <div>
      <h2> SpaceX launches </h2>
      {content}
    </div>
  )
}

export default ConnectedView(LaunchesView, 'launches');
