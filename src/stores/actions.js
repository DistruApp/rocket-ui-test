export const setLoading = (state, payload) => {
    const { ui } = state;
    return {...state, ui: {...ui, loading: payload}}
}

export const setError = (state, payload) => {
    const { ui } = state;
    return {...state, ui: {...ui, error: payload}}
}

export const setLaunches = (state, payload) => {
    return {...state, launches: payload}
}