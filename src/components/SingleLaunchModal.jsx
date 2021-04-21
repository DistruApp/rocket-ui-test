
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
    const [launchDetails, setLaunchDetails] = useState();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%) translateX(10%)` : `translateX(-100%)`
    });

    const closeModal = (e, shouldClose) => {
        setShowModal(false);
        setLaunchDetails();
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    // const [isfetchingLaunches, setIsFetchingLaunches] = useState(false);

    useEffect( () => {
        const getLaunchByFlightNumber = async () => {
            // setIsFetchingLaunches(true);
            try{
                const {data} = await LaunchService.getLaunchByFlightNumber(launch.flight_number);
                setLaunchDetails(data)
            } catch(e){
                console.log(e);
            } finally {
                // setIsFetchingLaunches(false);
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

    return (
        <React.Fragment>
            {showModal ? (
                <div className="background" ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="modal-wrapper">
                            {launchDetails?.links.flickr_images.length > 0 && (
                                <Carousel dynamicHeight={false}>
                                    {launchDetails?.links.flickr_images.map( (src, index) => {
                                        console.log({src})
                                            return(
                                                <div style={{height: 600}}>
                                                    <img src={src} />
                                                    <p className="legend">`Image ${index}`</p>
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
                            </div>
                            <MdClose className="close-modal-button"
                                color={"white"}
                                aria-label='Close modal'
                                onClick={e => closeModal(e, true)}
                            />
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </React.Fragment>
    );
};