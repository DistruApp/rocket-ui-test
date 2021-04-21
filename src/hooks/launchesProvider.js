import React, {useState, useEffect} from 'react'
import LaunchService from "../services/LaunchService";

export const LaunchesContext = React.createContext();

const sortLaunchesByDate = launches => launches.sort((a, b) => new Date(b.launch_date_local) - new Date(a.launch_date_local))

export const LaunchesProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const [launchToView, setLaunchToView] = useState(null);
    const value = {
        showModal,
        setShowModal,
        launchToView,
        setLaunchToView
    };
    return <LaunchesContext.Provider value={value}>
        {children}
    </LaunchesContext.Provider>
};

export const useLaunches = () => {
    const [launches, setLaunches] = useState([]);
    const [isfetchingLaunches, setIsFetchingLaunches] = useState(false);

    useEffect( () => {
        const getPastLaunches = async () => {
            setIsFetchingLaunches(true);
            try{
                const {data} = await LaunchService.getLaunches();
                setLaunches(sortLaunchesByDate(data))
            } catch(e){
                console.log(e);
            } finally {
                setIsFetchingLaunches(false);
            }
        }

        getPastLaunches();
    }, []);

    return {
        launches,
        isfetchingLaunches
    }
};

export const useUpcomingLaunches = () => {
    const [upcomingLaunches, setLaunches] = useState([]);
    const [isfetchingUpComingLaunches, setIsfetchingUpComingLaunches] = useState(false);

    useEffect( () => {
        const getUpcomingLaunches = async () => {
            setIsfetchingUpComingLaunches(true);
            try{
                const {data} = await LaunchService.getUpcomingLaunches();
                setLaunches(sortLaunchesByDate(data))
            } catch(e){
                console.log(e);
            } finally {
                setIsfetchingUpComingLaunches(false);
            }
        }

        getUpcomingLaunches();
    }, []);

    return {
        upcomingLaunches,
        isfetchingUpComingLaunches
    }
};

export const usePastLaunches = () => {
    const [pastLaunches, setLaunches] = useState([]);
    const [isfetchingPastLaunches, setIsfetchingPastLaunches] = useState(false);

    useEffect( () => {
        const getUpcomingLaunches = async () => {
            setIsfetchingPastLaunches(true);
            try{
                const {data} = await LaunchService.getPastLaunches();
                setLaunches(sortLaunchesByDate(data))
            } catch(e){
                console.log(e);
            } finally {
                setIsfetchingPastLaunches(false);
            }
        }

        getUpcomingLaunches();
    }, []);

    return {
        pastLaunches,
        isfetchingPastLaunches
    }
};

