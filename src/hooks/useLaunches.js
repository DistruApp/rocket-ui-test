import { useState } from 'react';
import { useSelector } from 'react-redux'
import {
  useQuery,
  gql
} from "@apollo/client";

const LAUNCHES = gql`
{
  launches {
    id
    mission_name
  	flight_number: id
    rocket {
      rocket {
        id
        cost_per_launch
        description
      }
    }
  }
}

`

const useLaunches = () => {

  const {
    data,
    loading,
    error
  } = useQuery(LAUNCHES)


  const [currentLaunch, setCurrentLaunch] = useState({
    flight_number: '',
    rocket: {
      rocket: {
        id: '',
        cost_per_launch: 0,
        description: ''
      }
    }
  })

  const hasSelectedLaunch = currentLaunch.flight_number.length !== 0

  const toggleLaunch = (nextLaunch) => {
    if(nextLaunch.flight_number !== currentLaunch.flight_number){
      return setCurrentLaunch(nextLaunch)
    }

    return setCurrentLaunch({
      flight_number: ''
    })

  }

  return {
    loading,
    error,
    launches: data.launches && data.launches || [],
    currentLaunch,
    hasSelectedLaunch,
    toggleLaunch
  }
}

export default useLaunches