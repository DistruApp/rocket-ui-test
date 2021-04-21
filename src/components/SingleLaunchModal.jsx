
import React, {useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../../styles/pageStyles/singleFlightModal.sass";
import LaunchService from "../services/LaunchService";
import moment from "moment";

const formatDate = dateString => {
    return moment(new Date(dateString)).format("h:mma on LL");
}

export const SingleLaunchModal = ({ showModal, setShowModal, launch }) => {
    const modalRef = useRef();
    const [launchDetails, setLaunchDetails] = useState(undefined);
    const [rocketDetails, setRocketDetails] = useState(undefined);
    const [isFetching, setIsFetching] = useState(false);
    const hasImages = launchDetails?.links.flickr_images.length > 0;
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%) translateX(10%)` : `translateX(-100%)`
    });

    const closeModal = () => {
        setShowModal(false);
        setLaunchDetails(undefined);
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect( () => {
        const getLaunchByFlightNumber = async () => {
            setIsFetching(true);
            try{
                let {data: launchData} = await LaunchService.getLaunchByFlightNumber(launch.flight_number);
                let {data: rocketDetails} =  await LaunchService.getRocketById(launchData?.rocket.rocket_id);
                setLaunchDetails(launchData);
                setRocketDetails(rocketDetails);
            } catch(e){
                console.log(e);
            } finally {
                setIsFetching(false);
            }
        }

        if(showModal){
            getLaunchByFlightNumber();
        }
    }, [launch]);


    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    if(isFetching){
        return (
            <div>LOADING...</div>
        )
    }

    return (
        <React.Fragment>
            {showModal ? (
                <div className="background" ref={modalRef}>
                    <animated.div style={animation}>
                        <div className={`modal-wrapper ${!hasImages && "no-image"}`}>
                            {hasImages && (
                                <Carousel width={700}>
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
                            <div className="modal-content">
                                <div className="review-details">
                                    <div className="name-date">
                                        <div>{launchDetails?.mission_name}</div>
                                        <div>{formatDate(launchDetails?.launch_date_local)}</div>
                                    </div>
                                </div>
                                <p>{launchDetails?.details}</p>
                                <br></br>
                                <h3>{`Cost Per Launch: $${rocketDetails?.cost_per_launch}`}</h3>
                            </div>
                            <MdClose className="close-modal-button"
                                color={"white"}
                                aria-label='Close modal'
                                onClick={e => closeModal(true)}
                            />
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </React.Fragment>
    );
};