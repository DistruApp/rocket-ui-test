import React, { useReducer } from "react";
import { setError, setLaunches, setLoading } from "./actions";
import { initialState, store } from "./store";

const handleEffect = (state, action, initialState) => {
    switch(action.type) {
        case 'set-loading':
            return setLoading(state, action.payload)
        case 'set-error':
            return setError(state, action.payload)
        case 'set-launches':
            return setLaunches(state, action.payload)

        default: {
            console.log(action);
            console.log(`Unhandled action type: ${action.type}`);
            return state;
        }
    }
}

const StateProvider = ({children}) => {
    const { Provider } = store
    const [state, dispatch] = useReducer((state, action) => {
        return handleEffect(state, action, initialState);
    }, initialState)
    return (
        <Provider value={{state, dispatch}}>{children}</Provider>
    );
}

export default StateProvider;
