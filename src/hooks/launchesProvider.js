import React, {useState, useEffect} from 'react'
import LaunchService from "../services/LaunchService";
const LaunchesContext = React.createContext();

export const LaunchesProvider = ({children}) => {
    const value = {};
    return <LaunchesContext.Provider value={value}>{children}</LaunchesContext.Provider>
};

export const useLaunches = () => {
    const [launches, setLaunches] = useState([]);
    const [isfetchingLaunches, setIsFetchingLaunches] = useState(false);

    useEffect( () => {
        const getContent = async () => {
            setIsFetchingLaunches(true);
            try{
                const {data} = await LaunchService.get();
                setLaunches(data)
            } catch(e){
                console.log(e);
            } finally {
                setIsFetchingLaunches(false);
            }
        }

        getContent();
    }, []);

    return {
        launches,
        isfetchingLaunches
    }
};