import { useState } from 'react';

const useLaunches = () => {
  const [currentLaunch, setCurrentLaunch] = useState({
    launch_id: ''
  })

  const toggleLaunch = (nextLaunch) => {
    if(nextLaunch.launch_id !== currentLaunch.launch_id){
      return setCurrentLaunch(nextLaunch)
    }

    setCurrentLaunch({
      launch_id: ''
    })

  }

  return {
    currentLaunch,
    toggleLaunch
  }
}

export default useLaunches