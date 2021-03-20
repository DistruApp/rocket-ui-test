import React from 'react'

const LaunchDetails = ({rocketCollection, launch, activeLaunch}) => {    
    const {rocket, errors, fetching} = rocketCollection
    if(activeLaunch !== launch.flight_number) return null
    if(fetching) return <p>LOADING</p>
    if(errors) return <p>STARLINK DOWN</p>
    const {details, rocket: {rocket_id: rocketId, rocket_name: rocketName}} = launch
    const {cost_per_launch: costPerLaunch} = rocket;

    return (
        <div>
            <p>{activeLaunch}</p>
            <p>{rocketId} - {rocketName}</p>
            <p>{details}</p>
            <p>{costPerLaunch}</p>
        </div>
    )
}

export default  LaunchDetails
