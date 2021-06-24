import { useContext, useEffect } from "react";
import { store } from "./store";
import fetchLaunches from "./queries";

const LoadData = ({children}) => {
    const { dispatch, state } = useContext(store);

    useEffect( () => {
        fetchLaunches(dispatch, state);
    }, []);

    return children;
};

export default LoadData;