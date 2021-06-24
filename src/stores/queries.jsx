async function fetchLaunches(dispatch, state) {
    dispatch({type: 'set-loading', payload: true})
    const launchesUrl = 'https://api.spacexdata.com/v4/launches';
    const resp = await fetch(launchesUrl);
    if (resp.status < 400) {
        const launches = await resp.json()
        dispatch({type: 'set-launches', payload: launches})
    } else {
        dispatch({type: 'set-error', payload: {
            show: true,
            msg: 'Error updating launch data. Please try refreshing your browser.'}
        })
    }
    dispatch({type: 'set-loading', payload: false})
}

async function fetchRockets(dispatch, state) {
    dispatch({type: 'set-loading', payload: true})
    const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';
    const resp = await fetch(rocketsUrl);
    if (resp.status < 400) {
        const rockets = await resp.json()
        dispatch({type: 'set-rockets', payload: rockets})
    } else {
        dispatch({type: 'set-error', payload: {
            show: true,
            msg: 'Error updating rocket data. Please try refreshing your browser.'}
        })
    }
    dispatch({type: 'set-loading', payload: false})
}

export { fetchLaunches, fetchRockets };
