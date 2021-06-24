import { useContext, useEffect } from "react";
import { store } from "./store";
import { fetchLaunches, fetchRockets } from "./queries";

const LoadData = ({ children }) => {
    const { dispatch, state } = useContext(store);

    useEffect( () => {
        fetchLaunches(dispatch, state);
    }, []);

    useEffect( () => {
        fetchRockets(dispatch, state);
    }, []);

    return children;
};

export default LoadData;