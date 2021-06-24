import React, { useReducer } from "react";
import {
    setError,
    setLaunches,
    setLoading,
    setShowLaunchDetail
} from "./actions";
import { initialState, store } from "./store";

const handleEffect = (state, action) => {
    switch(action.type) {
        case 'set-loading':
            return setLoading(state, action.payload)
        case 'set-error':
            return setError(state, action.payload)
        case 'set-launches':
            return setLaunches(state, action.payload)
        case 'set-show-launch-detail':
            return setShowLaunchDetail(state, action.payload)

        default: {
            console.log(`Unhandled action: ${action}`);
            return state;
        }
    }
}

const StateProvider = ({ children }) => {
    const { Provider } = store
    const [state, dispatch] = useReducer((state, action) => {
        return handleEffect(state, action);
    }, initialState)
    return (
        <Provider value={{ state, dispatch }}>{children}</Provider>
    );
}

export default StateProvider;
