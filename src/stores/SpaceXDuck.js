import SpaceXService from "../services/SpaceXService";

const CONFIG = {
   errorMessages: {
      launchApi: "Launch API failure",
      rocketApi: "Rocket API failure",
   },
   defaultKey: "id",
}

// Helpers, TODO move into a common utilities area
const convertArrayToIndexObject = (arr = [], key = CONFIG.defaultKey) => {
   if (!Array.isArray(arr)) return {};
   return arr.reduce((obj, current) => ({...obj, [current[key]]: current }), {});
}

// ACTIONS
export const ACTIONS = {
   fetchingLaunches: "spacex/FETCHING_LAUNCHES",
   setLaunches: "spacex/SET_LAUNCHES",
   setRockets: "spacex/SET_ROCKETS",
   setRocket: "spacex/SET_ROCKET",
}

// REDUCER
export const initialState = {
   fetchingLaunches: false,
   launches: {},
   rockets: {},
}
export default function reducer(state = initialState, action = {}) {
   const { type, payload } = action;
   switch (type) {
      case ACTIONS.fetchingLaunches:
         return { ...state, ...payload }
      case ACTIONS.setLaunches:
         return { ...state, launches: convertArrayToIndexObject(payload.launches), fetchingLaunches: false }
      case ACTIONS.setRockets:
         if (payload.rockets.length === 0) return {...state, rockets: {} }
         return {...state, rockets: {...state.rockets, ...convertArrayToIndexObject(payload.rockets)} }
      case ACTIONS.setRocket:
         return { ...state, rockets: {...state.rockets, [payload.rocket.id]: payload.rocket} }
      default: return state;
   }
}

// ACTION CREATORS
export const ACTION_CREATORS = {
   setFetchingLaunches: (fetchingLaunches = false) => ({
      type: ACTIONS.fetchingLaunches,
      payload: { fetchingLaunches }
   }),

   setLaunches: (launches = []) => ({
      type: ACTIONS.setLaunches,
      payload: { launches }
   }),

   setRockets: (rockets = []) => ({
      type: ACTIONS.setRockets,
      payload: { rockets }
   }),

   setRocket: (rocket = {}) => ({
      type: ACTIONS.setRocket,
      payload: { rocket }
   }),

   fetchLanuches: () => (dispatch, getState) => {
      const store = getState();
      if (Object.values(store.spacex.launches).length > 0) return Promise.resolve();
      dispatch(ACTION_CREATORS.setFetchingLaunches(true));
      return SpaceXService.getLaunches()
         .then((response) => {
            if(response.status === 200) {
               return dispatch(ACTION_CREATORS.setLaunches(response.data)) 
            }})
         .catch((error) => console.error(CONFIG.errorMessages.launchApi, error))
         .finally(() => dispatch(ACTION_CREATORS.setFetchingLaunches()));
   },

   fetchRocket: (id) => (dispatch, getState) => {
      const store = getState();
      if (store.spacex.rockets[id] !== undefined) return Promise.resolve();
      return SpaceXService.getRocket(id)
         .then((response) => {
            if(response.status === 200) {
               return dispatch(ACTION_CREATORS.setRocket(response.data))
            }})
         .catch((error) => console.error(CONFIG.errorMessages.rocketApi, error));
   }
}

