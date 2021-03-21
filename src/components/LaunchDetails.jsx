import React from 'react'

const LaunchDetails = ({rocketCollection, launch, activeLaunch}) => {    
    const {rocket, errors, fetching} = rocketCollection
    if(activeLaunch !== launch.flight_number) return null
    if(fetching) return <p data-test="rocketLoading">LOADING</p>
    if(errors) return <p  data-test="fetchError">STARLINK DOWN</p>
    const {details, rocket: {rocket_id: rocketId, rocket_name: rocketName}} = launch
    const {cost_per_launch: costPerLaunch} = rocket;

    return (
        <div data-test="launchDetails">
            <p>{activeLaunch}</p>
            <p data-test="rocketId">{rocketId} - {rocketName}</p>
            <p data-test="launchDescription">{details}</p>
            <p data-test="costPerLaunch">{costPerLaunch}</p>
        </div>
    )
}

export default  LaunchDetails
