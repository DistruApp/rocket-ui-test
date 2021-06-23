export async function fetchLaunches(dispatch, state) {
    dispatch({type: 'set-loading', payload: true})
    const launchUrl = 'https://api.spacexdata.com/v4/launches';
    const resp = await fetch(launchUrl);
    if (resp.status < 400) {
        const { launches } = await resp.json()
        dispatch({type: 'set-launches', payload: launches})
    } else {
        dispatch({type: 'set-error', payload: {
            show: true,
            msg: 'Error updating launch data. Please try refreshing your browser.'}
        })
    }
    dispatch({type: 'set-loading', payload: false})
}