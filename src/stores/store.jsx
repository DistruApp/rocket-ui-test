import { createContext } from 'react';

const initialState = {
    launches: [],
    rockets: [],
    ui: {
        loading: false,
        error: {
            msg: null,
            show: false,
        },
        showLaunchDetail: {
            id: null,
            show: false,
        }
    }
}

const store = createContext(initialState);

export { initialState, store };
