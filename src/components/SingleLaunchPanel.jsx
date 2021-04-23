import React, {useEffect, useState} from 'react'
import "../../styles/pageStyles/singleFlightPanel.sass";
import {MdClose} from "react-icons/md";
import {Carousel} from "react-responsive-carousel";
import LaunchService from "../services/LaunchService";

export const SingleLaunchPanel = ({showPanel, setShowPanel, launch}) => {
    const [launchDetails, setLaunchDetails] = useState(undefined);
    const [rocketDetails, setRocketDetails] = useState(undefined);
    const [isFetching, setIsFetching] = useState(false);
    const hasImages = launchDetails?.links.flickr_images.length > 0;

    useEffect( () => {
        const getLaunchByFlightNumber = async () => {
            setIsFetching(true);
            try{
                const {data: launchData} = await LaunchService.getLaunchByFlightNumber(launch.flight_number);
                const {data: rocketData} =  await LaunchService.getRocketById(launchData?.rocket.rocket_id);
                setLaunchDetails(launchData);
                setRocketDetails(rocketData);
            } catch(e){
                console.log(e);
            } finally {
                setIsFetching(false);
            }
        }

        if(showPanel){
            getLaunchByFlightNumber();
        }
    }, [launch]);
    
    const closePanel = value => {
        setShowPanel(false);
    }

    if (!showPanel) return null;

    if(isFetching){
        return (
            <div className="container">LOADING...</div>
        )
    }

    return  (
        <div className="container">
            <div className="panel-header">
                <MdClose className="panel-close-button"
                         color="white"
                         aria-label='Close modal'
                         onClick={e => closePanel(true)}
                />
                <h2>Mission Name: {launch.mission_name}</h2>
            </div>
            <div>
                <p>{launchDetails?.details}</p>
                <h3>{`Cost Per Launch: $${rocketDetails?.cost_per_launch}`}</h3>
                {hasImages && (
                    <Carousel width={500}>
                        {launchDetails?.links.flickr_images.map( (src, index) => {
                            console.log({src})
                            return(
                                <div style={{height: 600}}>
                                    <img src={src} />
                                    <p className="legend">Image {index+1}</p>
                                </div>
                            )

                        })}
                    </Carousel>
                )}
            </div>



        </div>
    )

}



    