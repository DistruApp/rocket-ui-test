import { useContext, useEffect } from "react";
import {store} from "./store";
import { fetchLaunches } from "./queries";

export const LoadData = () => {
    const { dispatch, state } = useContext(store);

    useEffect( () => {
        fetchLaunches(dispatch, state);
    })
};